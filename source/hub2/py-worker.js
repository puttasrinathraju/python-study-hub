/* Python runner: Pyodide in a Web Worker so long or endless loops never freeze the page. */
var py = null, runner = null, loading = null;

var RUNNER_SRC = [
  "import sys, io, traceback, builtins, linecache",
  "class _HubNeedInput(BaseException):",
  "    pass",
  "class _HubOut(io.StringIO):",
  "    LIMIT = 100000",
  "    def write(self, s):",
  "        if self.tell() < self.LIMIT:",
  "            super().write(s)",
  "            if self.tell() >= self.LIMIT:",
  "                super().write('\\n... output cut off here (too long) ...\\n')",
  "        return len(s)",
  "def _hub_run(code, inputs):",
  "    inputs = list(inputs)",
  "    out = _HubOut()",
  "    def _input(prompt=''):",
  "        out.write(str(prompt))",
  "        if inputs:",
  "            v = str(inputs.pop(0))",
  "            out.write(v + '\\n')",
  "            return v",
  "        raise _HubNeedInput(str(prompt))",
  "    old = (sys.stdout, sys.stderr, builtins.input)",
  "    sys.stdout = out",
  "    sys.stderr = out",
  "    builtins.input = _input",
  "    linecache.cache['<your code>'] = (len(code), None, code.splitlines(True), '<your code>')",
  "    ns = {'__name__': '__main__', '__builtins__': builtins}",
  "    status, err = 'ok', ''",
  "    try:",
  "        exec(compile(code, '<your code>', 'exec'), ns)",
  "    except _HubNeedInput as e:",
  "        status = 'input'",
  "        err = e.args[0] if e.args else ''",
  "    except SystemExit:",
  "        pass",
  "    except BaseException:",
  "        status = 'error'",
  "        etype, evalue, tb = sys.exc_info()",
  "        tb = tb.tb_next if tb is not None else None",
  "        err = ''.join(traceback.format_exception(etype, evalue, tb))",
  "    finally:",
  "        sys.stdout, sys.stderr, builtins.input = old",
  "    return [status, out.getvalue(), err]"
].join("\n");

var FILES = [], BIN = {};   /* practice data files: fetched the first time code mentions them */
var LOADED = {}, BASE = self.location.href.replace(/[^\/]*$/, '');
var HUBCHARTS = /*@@HUBCHARTS@@*/"";
var WHEELS = { seaborn: 'py/seaborn-0.13.2-py3-none-any.whl', openpyxl: 'py/openpyxl-3.1.5-py2.py3-none-any.whl', et_xmlfile: 'py/et_xmlfile-2.0.0-py3-none-any.whl' };

async function getFile(name) {
  if (BIN[name] === undefined) {
    BIN[name] = null;
    try { var r = await fetch(BASE + 'data/' + name); if (r.ok) BIN[name] = new Uint8Array(await r.arrayBuffer()); } catch (e) {}
  }
  return BIN[name];
}

async function init(indexURL, files) {
  FILES = files || [];
  importScripts(indexURL + "pyodide.js");
  py = await loadPyodide({ indexURL: indexURL });
  py.runPython("import os\nos.environ['COLUMNS'] = '80'\nos.environ['LINES'] = '24'\nos.environ['SEABORN_DATA'] = '/home/pyodide/seaborn-data'");
  py.runPython(RUNNER_SRC);
  runner = py.globals.get("_hub_run");
}

/* What big libraries a piece of code needs (beyond what its import lines already load) */
function needs(code) {
  var charts = /\b(matplotlib|seaborn|_hubcharts)\b|\.plot\(|\.hist\(/.test(code);
  var sns = /\bseaborn\b/.test(code), xl = /read_excel|to_excel|openpyxl/.test(code);
  var pd = sns || xl || /\bpandas\b|\.plot\(/.test(code);
  var list = [];
  if (pd) list.push('numpy', 'pandas');
  if (charts) list.push('numpy', 'matplotlib');
  if (/clustermap|\bscipy\b/.test(code)) list.push('scipy');
  if (sns) list.push(BASE + WHEELS.seaborn);
  if (xl) list.push(BASE + WHEELS.et_xmlfile, BASE + WHEELS.openpyxl);
  return { charts: charts, sns: sns, list: list.filter(function (x, i) { return list.indexOf(x) === i; }) };
}

self.onmessage = async function (e) {
  var m = e.data;
  if (m.type === "init") {
    loading = init(m.indexURL, m.data);
    try { await loading; self.postMessage({ type: "ready", version: py.runPython("import sys; sys.version.split()[0]") }); }
    catch (err) { self.postMessage({ type: "fatal", error: String(err && err.message || err) }); }
    return;
  }
  if (m.type === "run") {
    try { await loading; } catch (err) { return; }
    try {
      var nd = needs(m.code), todo = nd.list.filter(function (p) { return !LOADED[p]; });
      if (todo.length) {
        var big = todo.some(function (p) { return /pandas|matplotlib|seaborn|scipy/.test(p); });
        self.postMessage({ type: "status", id: m.id, text: big ? "Loading Pandas and charts (first time only, about 10 to 20 seconds)..." : "Loading..." });
        await py.loadPackage(todo);
        todo.forEach(function (p) { LOADED[p] = 1; });
      } else if (/\b(import|from)\s+numpy\b/.test(m.code) && !LOADED.numpy) {
        self.postMessage({ type: "status", id: m.id, text: "Loading NumPy (first time only, a few seconds)..." });
      }
      for (var i = 0; i < FILES.length; i++) {
        var name = FILES[i];
        if (m.code.indexOf(name) > -1 || (name === 'tips.csv' && /load_dataset/.test(m.code))) {
          var data = await getFile(name);
          if (data) {
            py.FS.writeFile(name, data);
            if (name === 'tips.csv') { try { py.FS.mkdir('/home/pyodide/seaborn-data'); } catch (x) {} py.FS.writeFile('/home/pyodide/seaborn-data/tips.csv', data); }
          }
        }
      }
      try { await py.loadPackagesFromImports(m.code); } catch (ignore) { /* syntax errors are reported by the runner */ }
      if (/\bnumpy\b/.test(m.code)) LOADED.numpy = 1;
      if (nd.charts) {
        if (!LOADED._hubcharts) { py.FS.writeFile('/home/pyodide/_hubcharts.py', HUBCHARTS); LOADED._hubcharts = 1; }
        py.runPython("import sys\nif '/home/pyodide' not in sys.path: sys.path.insert(0, '/home/pyodide')\nimport _hubcharts\n_hubcharts.PNG = True\n_hubcharts.start()" + (nd.sns ? "\n_hubcharts.patch_sns()" : ""));
      }
      var res = runner(m.code, py.toPy(m.inputs || []));
      var arr = res.toJs();
      res.destroy();
      var msg = { type: "done", id: m.id, status: arr[0], out: arr[1], err: arr[2] };
      if (nd.charts) {
        try {
          var ch = JSON.parse(py.runPython("_hubcharts.finish()"));
          msg.figs = ch.figs;
          if (m.chart) msg.chk = JSON.parse(py.runPython("import json\njson.dumps(_hubcharts.check(" + JSON.stringify(JSON.stringify(m.chart)) + "))"));
        } catch (err2) { msg.figs = []; }
      }
      self.postMessage(msg);
    } catch (err) {
      self.postMessage({ type: "done", id: m.id, status: "error", out: "", err: String(err && err.message || err) });
    }
  }
};
