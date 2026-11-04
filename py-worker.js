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
var HUBCHARTS = "# _hubcharts: chart support for the Python Study Hub runner.\n# The browser runner and the checker in the build use this same file, so both see the same chart facts.\n# On import it switches Matplotlib to the Agg backend (no window), makes plt.show() keep a picture of every\n# open chart, and records which plotting functions draw on each axes.\nimport os, io, json, base64, functools\nos.environ['MPLBACKEND'] = 'Agg'\nimport matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nfrom matplotlib.axes import Axes\nfrom matplotlib.patches import Rectangle, Wedge\nfrom matplotlib.collections import PathCollection, QuadMesh\n\nPNG = False          # True in the browser: keep a PNG of every chart\nDPI = 80\nSHOWN = []           # charts of the current run: [{'png': str, 'facts': dict}]\nLAST = []            # charts of the previous run (read by a project's check run)\nSNS = []             # seaborn functions called in this run\n_depth = [0]\nKINDS = {'plot': 'line', 'bar': 'bar', 'barh': 'barh', 'hist': 'hist', 'scatter': 'scatter', 'pie': 'pie',\n         'boxplot': 'box', 'bxp': 'box', 'imshow': 'image', 'pcolormesh': 'mesh', 'violinplot': 'violin',\n         'fill_between': 'area', 'fill_betweenx': 'area', 'stackplot': 'area', 'errorbar': 'errorbar', 'step': 'line',\n         'hexbin': 'hexbin', 'annotate': 'annotate', 'text': 'text', 'axhline': 'hline', 'axvline': 'vline'}\n\n\ndef _wrap(name):\n    orig = getattr(Axes, name)\n\n    @functools.wraps(orig)\n    def inner(self, *args, **kwargs):\n        top = _depth[0] == 0\n        _depth[0] += 1\n        try:\n            res = orig(self, *args, **kwargs)\n        finally:\n            _depth[0] -= 1\n        if top:\n            calls = self.__dict__.setdefault('_hub_calls', [])\n            calls.append(KINDS[name])\n            if name in ('plot', 'step'):\n                for ln in res:\n                    ln._hub_plot = True\n            if name in ('boxplot', 'bxp'):\n                self._hub_boxes = getattr(self, '_hub_boxes', 0) + len(res.get('boxes', []))\n            if name == 'violinplot':\n                self._hub_violins = getattr(self, '_hub_violins', 0) + len(res.get('bodies', []))\n        return res\n    inner._hub = True\n    setattr(Axes, name, inner)\n\n\ndef _show(*args, **kwargs):\n    collect()\n\n\ndef patch():\n    if getattr(Axes, '_hub_patched', False):\n        return\n    for name in KINDS:\n        _wrap(name)\n    Axes._hub_patched = True\n    plt.show = _show\n\n\ndef patch_sns():\n    import seaborn as sns\n    if getattr(sns, '_hub_patched', False):\n        return\n    names = ['histplot', 'kdeplot', 'rugplot', 'ecdfplot', 'displot', 'barplot', 'countplot', 'boxplot', 'violinplot',\n             'stripplot', 'swarmplot', 'pointplot', 'catplot', 'scatterplot', 'lineplot', 'regplot', 'lmplot',\n             'residplot', 'relplot', 'heatmap', 'clustermap', 'pairplot', 'jointplot', 'boxenplot']\n\n    def wrap(fname):\n        orig = getattr(sns, fname)\n\n        @functools.wraps(orig)\n        def inner(*args, **kwargs):\n            SNS.append(fname)\n            return orig(*args, **kwargs)\n        return inner\n    for n in names:\n        setattr(sns, n, wrap(n))\n    for cls in ('FacetGrid', 'PairGrid', 'JointGrid'):\n        c = getattr(sns, cls)\n        old = c.__init__\n\n        def init(self, *a, _old=old, _n=cls, **k):\n            SNS.append(_n)\n            _old(self, *a, **k)\n        c.__init__ = init\n    sns._hub_patched = True\n\n\ndef _r(v):\n    try:\n        return float('%.4g' % v)\n    except (TypeError, ValueError):\n        return None\n\n\ndef _txt(t):\n    return t.get_text().strip() if t is not None else ''\n\n\ndef ax_facts(ax):\n    rects = [p for p in ax.patches if isinstance(p, Rectangle)]\n    calls = ax.__dict__.get('_hub_calls', [])\n    horiz = 'barh' in calls and 'bar' not in calls\n    leg = ax.get_legend()\n    title = _txt(ax.title) or _txt(ax._left_title) or _txt(ax._right_title)\n    f = {\n        'kinds': list(dict.fromkeys(calls)),\n        'title': title, 'xlabel': ax.get_xlabel().strip(), 'ylabel': ax.get_ylabel().strip(),\n        'bars': len(rects), 'heights': [_r(p.get_width() if horiz else p.get_height()) for p in rects][:60],\n        'lines': sum(1 for ln in ax.lines if getattr(ln, '_hub_plot', False)),\n        'points': sum(len(c.get_offsets()) for c in ax.collections if isinstance(c, PathCollection)),\n        'wedges': sum(1 for p in ax.patches if isinstance(p, Wedge)),\n        'boxes': getattr(ax, '_hub_boxes', 0), 'violins': getattr(ax, '_hub_violins', 0),\n        'images': len(ax.images), 'meshes': sum(1 for c in ax.collections if isinstance(c, QuadMesh)),\n        'legend': [_txt(t) for t in leg.get_texts()] if leg is not None else None,\n        'xticks': [_txt(t) for t in ax.get_xticklabels() if _txt(t)][:40],\n        'yticks': [_txt(t) for t in ax.get_yticklabels() if _txt(t)][:40],\n        'texts': [_txt(t) for t in ax.texts][:40],\n        'grid': any(g.get_visible() for g in ax.get_xgridlines() + ax.get_ygridlines()),\n        'spines': {k: bool(s.get_visible()) for k, s in ax.spines.items() if k in ('top', 'right')},\n    }\n    return f\n\n\ndef fig_facts(fig):\n    axes = [a for a in fig.axes if not hasattr(a, '_colorbar')]\n    sup = fig._suptitle.get_text().strip() if getattr(fig, '_suptitle', None) is not None else ''\n    legs = []\n    for lg in fig.legends:\n        legs += [_txt(t) for t in lg.get_texts()]\n    w, h = fig.get_size_inches()\n    return {'axes': [ax_facts(a) for a in axes], 'suptitle': sup, 'colorbars': len(fig.axes) - len(axes),\n            'legend': legs or None, 'size': [_r(w), _r(h)]}\n\n\ndef collect():\n    \"\"\"Draw every open chart, keep its facts (and a PNG in the browser), then close it.\"\"\"\n    for num in plt.get_fignums():\n        fig = plt.figure(num)\n        item = {}\n        try:\n            buf = io.BytesIO()\n            fig.savefig(buf, format='png', dpi=DPI)\n            if PNG:\n                item['png'] = base64.b64encode(buf.getvalue()).decode('ascii')\n            item['facts'] = fig_facts(fig)\n        except Exception as e:  # a broken chart must not hide the learner's own error message\n            item['facts'] = {'axes': [], 'error': str(e)}\n        SHOWN.append(item)\n    plt.close('all')\n\n\ndef start():\n    \"\"\"Start of a run: forget the last run's charts and styles, so every code box starts like a fresh Python.\"\"\"\n    del SHOWN[:]\n    del SNS[:]\n    plt.close('all')\n    matplotlib.style.use('default')   # undo plt.style.use(...), rcParams and Seaborn themes of an earlier run (keeps the backend)\n\n\ndef finish():\n    \"\"\"End of a run: collect the open charts and return them as JSON for the page.\"\"\"\n    collect()\n    LAST[:] = SHOWN[:]\n    return json.dumps({'figs': SHOWN, 'sns': SNS})\n\n\n# ---------- checking a chart task ----------\nNAMES = {'line': 'line chart (plot)', 'bar': 'bar chart (bar)', 'barh': 'horizontal bar chart (barh)', 'hist': 'histogram (hist)',\n         'scatter': 'scatter plot (scatter)', 'pie': 'pie chart (pie)', 'box': 'box plot (boxplot)', 'image': 'image or heatmap (imshow)',\n         'mesh': 'heatmap', 'violin': 'violin plot', 'area': 'shaded area', 'annotate': 'annotation (annotate)', 'text': 'text label (text)'}\nCOUNTS = [('bars', 'bars'), ('lines', 'lines'), ('points', 'points'), ('wedges', 'pie slices'), ('boxes', 'boxes'),\n          ('violins', 'violins'), ('images', 'images'), ('meshes', 'heatmaps')]\n\n\nSINGLE = {'bars': 'bar', 'lines': 'line', 'points': 'point', 'pie slices': 'pie slice', 'boxes': 'box', 'violins': 'violin', 'images': 'image', 'heatmaps': 'heatmap'}\n\n\ndef _same(a, b):\n    return str(a).strip().lower() == str(b).strip().lower()\n\n\ndef _count_ok(want, got):\n    if isinstance(want, (list, tuple)):\n        return want[0] <= got <= want[1]\n    return got == want\n\n\ndef _count_txt(want):\n    if isinstance(want, (list, tuple)):\n        return 'at least %d' % want[0] if want[1] >= 9999 else '%d to %d' % (want[0], want[1])\n    return str(want)\n\n\ndef _label(spec, got, what, how):\n    if spec is True:\n        return [] if got else ['The %s is missing. Add it with %s.' % (what, how)]\n    if spec and not _same(spec, got):\n        return [\"The %s should be '%s', but it is '%s'.\" % (what, spec, got) if got else \"The %s is missing: it should be '%s'. Add it with %s.\" % (what, spec, how)]\n    return []\n\n\ndef check_axes(s, f, where=''):\n    p = []\n    kinds = s.get('kind')\n    if kinds:\n        for k in ([kinds] if isinstance(kinds, str) else kinds):\n            if k not in f['kinds']:\n                found = ', '.join(NAMES.get(x, x) for x in f['kinds'] if x not in ('text', 'annotate', 'hline', 'vline')) or 'nothing drawn'\n                p.append('%sExpected a %s, but found: %s.' % (where, NAMES.get(k, k), found))\n    for key, word in COUNTS:\n        if key in s and not _count_ok(s[key], f[key]):\n            one = s[key] == 1 or (isinstance(s[key], (list, tuple)) and s[key][1] == 1)\n            p.append('%sExpected %s %s, found %d.' % (where, _count_txt(s[key]), SINGLE.get(word, word) if one else word, f[key]))\n    p += [where + m for m in _label(s.get('title'), f['title'], 'title', 'plt.title() or ax.set_title()')]\n    p += [where + m for m in _label(s.get('xlabel'), f['xlabel'], 'x-axis label', 'plt.xlabel() or ax.set_xlabel()')]\n    p += [where + m for m in _label(s.get('ylabel'), f['ylabel'], 'y-axis label', 'plt.ylabel() or ax.set_ylabel()')]\n    if 'legend' in s:\n        lg = f['legend']\n        if lg is None:\n            p.append(where + 'The legend is missing. Give each series a label= and call plt.legend() or ax.legend().')\n        elif s['legend'] is not True and sorted(x.lower() for x in lg) != sorted(str(x).lower() for x in s['legend']):\n            p.append(where + 'The legend should show %s, but it shows %s.' % (', '.join(map(str, s['legend'])), ', '.join(lg) or 'nothing'))\n    for key, word in (('xticks', 'x-axis'), ('yticks', 'y-axis')):\n        if key in s and [str(x) for x in s[key]] != f[key]:\n            p.append('%sThe %s labels should be %s, but they are %s.' % (where, word, ', '.join(map(str, s[key])), ', '.join(f[key]) or 'empty'))\n    if 'heights' in s:\n        want, got = s['heights'], f['heights']\n        if len(want) != len(got) or any(abs(a - b) > max(0.01, abs(a) * 0.002) for a, b in zip(want, got)):\n            p.append('%sThe bar sizes are not right yet: expected %s, found %s.' % (where, ', '.join('%g' % x for x in want), ', '.join('%g' % x for x in got)))\n    if 'texts' in s and not _count_ok(s['texts'], len(f['texts'])):\n        p.append('%sExpected %s text labels on the chart, found %d.' % (where, _count_txt(s['texts']), len(f['texts'])))\n    for key, word in (('xtick_has', 'x-axis'), ('ytick_has', 'y-axis')):\n        if key in s and not any(s[key] in t for t in f[key[:5] + 's']):\n            p.append(\"%sThe %s numbers should show '%s', like %s.\" % (where, word, s[key], ', '.join(f[key[:5] + 's'][:2]) or 'nothing yet'))\n    if 'text_has' in s and not any(s['text_has'].lower() in t.lower() for t in f['texts']):\n        p.append(\"%sNo text on the chart contains '%s'.\" % (where, s['text_has']))\n    if s.get('grid') and not f['grid']:\n        p.append(where + 'The grid is missing. Add it with plt.grid() or ax.grid().')\n    for side, vis in (s.get('spines') or {}).items():\n        if f['spines'].get(side) != vis:\n            p.append('%sThe %s border (spine) should be %s.' % (where, side, 'shown' if vis else 'hidden'))\n    return p\n\n\ndef check(spec, figs=None, sns_calls=None):\n    \"\"\"Compare the charts of a run with what a task asks for. Returns a list of problems (empty = all good).\"\"\"\n    figs = SHOWN if figs is None else figs\n    sns_calls = SNS if sns_calls is None else sns_calls\n    if isinstance(spec, str):\n        spec = json.loads(spec)\n    p = []\n    for name in ([spec['sns']] if isinstance(spec.get('sns'), str) else spec.get('sns', [])):\n        if name not in sns_calls:\n            p.append('Use sns.%s() for this task.' % name if name[0].islower() else 'Use sns.%s for this task.' % name)\n    if not figs:\n        return p + ['No chart was drawn. Draw it, then call plt.show().']\n    if 'figs' in spec and len(figs) != spec['figs']:\n        p.append('Expected %d chart window%s (figures), found %d.' % (spec['figs'], '' if spec['figs'] == 1 else 's', len(figs)))\n    f = figs[min(spec.get('fig', 0), len(figs) - 1)]['facts']\n    if 'error' in f:\n        return p + ['The chart could not be drawn: ' + f['error']]\n    axes = f['axes']\n    if 'axes' in spec and not _count_ok(spec['axes'], len(axes)):\n        p.append('Expected %s charts (axes) in the figure, found %d.' % (_count_txt(spec['axes']), len(axes)))\n    p += _label(spec.get('suptitle'), f['suptitle'], 'figure title', 'fig.suptitle()')\n    if spec.get('colorbar') and not f['colorbars']:\n        p.append('The colour bar is missing. Add it with plt.colorbar().')\n    if 'figlegend' in spec and not f['legend']:\n        p.append('The legend is missing.')\n    if not axes:\n        return p + ['The figure has no chart in it.']\n    if 'ax' in spec:\n        for i, s in enumerate(spec['ax']):\n            if i < len(axes):\n                p += check_axes(s, axes[i], 'Chart %d: ' % (i + 1) if len(spec['ax']) > 1 else '')\n    else:\n        p += check_axes(spec, axes[0])\n    return p\n\n\n# ---------- text summaries (used by the build checks and by projects) ----------\ndef summary():\n    \"\"\"One line per axes: printed after a chart example so the checker can compare browser and laptop Python.\"\"\"\n    collect()\n    out = []\n    for i, it in enumerate(SHOWN):\n        f = it['facts']\n        out.append('#fig%d axes=%d sup=%r cbar=%d leg=%r' % (i + 1, len(f.get('axes', [])), f.get('suptitle', ''), f.get('colorbars', 0), f.get('legend')))\n        for j, a in enumerate(f.get('axes', [])):\n            cnt = ' '.join('%s=%d' % (k, a[k]) for k, _ in COUNTS if a[k])\n            out.append('#ax%d %s %s t=%r x=%r y=%r leg=%r xt=%r h=%r tx=%d' % (j + 1, '+'.join(a['kinds']), cnt, a['title'], a['xlabel'], a['ylabel'], a['legend'], a['xticks'][:12], a['heights'][:12], len(a['texts'])))\n    if SNS:\n        out.append('#sns ' + ' '.join(SNS))\n    print('\\n'.join(out))\n\n\ndef project_report(this_run=False):\n    \"\"\"Plain lines a project test can check: what each chart shows. On the page the report runs just after the\n    learner's program, as its own run, so it reads LAST; the build checks run both in one go (this_run=True).\"\"\"\n    collect()\n    figs = SHOWN if this_run else (SHOWN or LAST)\n    print('--- charts ---')\n    print('Figures: %d' % len(figs))\n    for i, it in enumerate(figs):\n        f = it['facts']\n        print('Figure %d: %d chart%s%s' % (i + 1, len(f['axes']), '' if len(f['axes']) == 1 else 's', (', title: ' + f['suptitle']) if f['suptitle'] else ''))\n        for j, a in enumerate(f['axes']):\n            parts = ['+'.join(sorted(k for k in a['kinds'] if k not in ('text', 'annotate', 'hline', 'vline'))) or 'empty']\n            parts += ['%d %s' % (a[k], SINGLE.get(w, w) if a[k] == 1 else w) for k, w in COUNTS if a[k]]\n            for k, w in (('title', 'title'), ('xlabel', 'x'), ('ylabel', 'y')):\n                if a[k]:\n                    parts.append('%s: %s' % (w, a[k]))\n            if a['legend']:\n                parts.append('legend: ' + ', '.join(a['legend']))\n            print('Chart %d.%d: %s' % (i + 1, j + 1, ', '.join(parts)))\n\n\npatch()\n";
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
