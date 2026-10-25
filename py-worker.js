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

async function init(indexURL) {
  importScripts(indexURL + "pyodide.js");
  py = await loadPyodide({ indexURL: indexURL });
  py.runPython(RUNNER_SRC);
  runner = py.globals.get("_hub_run");
}

self.onmessage = async function (e) {
  var m = e.data;
  if (m.type === "init") {
    loading = init(m.indexURL);
    try { await loading; self.postMessage({ type: "ready", version: py.runPython("import sys; sys.version.split()[0]") }); }
    catch (err) { self.postMessage({ type: "fatal", error: String(err && err.message || err) }); }
    return;
  }
  if (m.type === "run") {
    try { await loading; } catch (err) { return; }
    try {
      if (/\b(import|from)\s+numpy\b/.test(m.code)) {
        self.postMessage({ type: "status", id: m.id, text: "Loading NumPy (first time only, a few seconds)..." });
      }
      try { await py.loadPackagesFromImports(m.code); } catch (ignore) { /* syntax errors are reported by the runner */ }
      var res = runner(m.code, py.toPy(m.inputs || []));
      var arr = res.toJs();
      res.destroy();
      self.postMessage({ type: "done", id: m.id, status: arr[0], out: arr[1], err: arr[2] });
    } catch (err) {
      self.postMessage({ type: "done", id: m.id, status: "error", out: "", err: String(err && err.message || err) });
    }
  }
};
