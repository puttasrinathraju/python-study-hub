# Shared helpers for the Part 8-10 chapter generators (Pandas, Matplotlib, Seaborn).
# Run the generators with the matching Python (pandas 2.2.3, numpy 2.0.2, matplotlib 3.8.4, seaborn 0.13.2,
# scipy 1.14.1: the versions of the browser runner). Every example is run here; charts are run through
# hub2/hubcharts.py (the same file the browser uses), saved as pictures in hub2/img/ and summarised as text,
# so runcheck.py and pyodide_check.js can compare laptop Python with browser Python.
import subprocess, sys, json, os, shutil, glob, tempfile, base64, io, re
here = os.path.dirname(os.path.abspath(__file__)); HUB = os.path.join(here, '..', 'hub2')
import pandas as _pd
assert _pd.__version__ == '2.2.3', 'run the generators with the matching Python (see NOTES.md)'
WORK = tempfile.mkdtemp()
for f in glob.glob(os.path.join(HUB, 'data', '*')): shutil.copy(f, WORK)
shutil.copy(os.path.join(HUB, 'hubcharts.py'), os.path.join(WORK, '_hubcharts.py'))
ENV = dict(os.environ, COLUMNS='80', LINES='24', SEABORN_DATA=WORK, MPLBACKEND='Agg', PYTHONHASHSEED='0')
CHART_RE = re.compile(r'\b(matplotlib|seaborn)\b')


class Raw(str):
    pass


def _exec(code):
    return subprocess.run([sys.executable, '-c', code], capture_output=True, text=True, cwd=WORK, env=ENV, timeout=120)


def run(code, err=False):
    """Run code, return what it prints. err=True: the code must fail; returns output + the last error line."""
    p = _exec(code)
    if err:
        assert p.returncode != 0, ('expected an error', code)
        lines = p.stderr.strip().split('\n')
        k = max([i for i, l in enumerate(lines) if re.match(r'^[\w.]+(Error|Exception)\b', l)] or [len(lines) - 1])
        return (p.stdout + '\n'.join(lines[k:])).strip()
    assert p.returncode == 0 and not p.stderr.strip(), (code, p.stderr[-1500:])
    return p.stdout.rstrip('\n')


IMGS = []


def chart_run(code, name=None):
    """Run chart code like the browser does. Returns (printed text, summary text, figs). Saves pictures as img/<name>-N.webp."""
    pre = 'import _hubcharts as _hc\n_hc.PNG = True\n_hc.start()\n' + ('_hc.patch_sns()\n' if 'seaborn' in code else '')
    post = '\nimport json as _j\nprint("@@SUM@@")\n_hc.summary()\nprint("@@FIGS@@" + _j.dumps({"figs": _hc.SHOWN, "sns": _hc.SNS}))\n'
    p = _exec(pre + code + post)
    assert p.returncode == 0 and not p.stderr.strip(), (code, p.stderr[-1500:])
    text, rest = p.stdout.split('@@SUM@@\n', 1)
    summ, figs = rest.split('@@FIGS@@', 1)
    figs = json.loads(figs)
    imgs = []
    if name:
        from PIL import Image
        for i, f in enumerate(figs['figs']):
            fn = 'img/%s%s.webp' % (name, '' if len(figs['figs']) == 1 else '-%d' % (i + 1))
            Image.open(io.BytesIO(base64.b64decode(f['png']))).convert('RGB').save(os.path.join(HUB, fn), 'WEBP', quality=82, method=6)
            imgs.append(fn); IMGS.append(fn)
    return text.rstrip('\n'), summ.rstrip('\n'), figs, imgs


def chart_try(code):
    """Like chart_run, but for code that may fail: returns (ok, text or error, figs)."""
    pre = 'import _hubcharts as _hc\n_hc.start()\n' + ('_hc.patch_sns()\n' if 'seaborn' in code else '')
    post = '\nimport json as _j\n_hc.collect()\nprint("@@FIGS@@" + _j.dumps({"figs": _hc.SHOWN, "sns": _hc.SNS}))\n'
    p = _exec(pre + code + post)
    if p.returncode != 0 or p.stderr.strip():
        lines = (p.stdout.split('@@FIGS@@')[0] + p.stderr).strip().split('\n')
        k = max([i for i, l in enumerate(lines) if re.match(r'^[\w.]+(Error|Exception|Warning)\b|.*Warning: ', l)] or [len(lines) - 1])
        return False, '\n'.join(lines[k:]).strip(), {'figs': [], 'sns': []}
    text, figs = p.stdout.split('@@FIGS@@', 1)
    return True, text.rstrip('\n'), json.loads(figs)


def check(spec, figs):
    """The same chart check the browser runs (hubcharts.check), run here on the facts."""
    sys.path.insert(0, WORK)
    import _hubcharts
    return _hubcharts.check(spec, figs['figs'], figs['sns'])


class Chapter:
    """Collects one chapter's blocks. Chart pictures are named <prefix>-<n>."""
    def __init__(self, prefix, pre=''):
        self.prefix, self.pre, self.n = prefix, pre, 0

    def full(self, code):
        code = code.strip('\n')
        return code if code.startswith(self.pre.strip('\n')) or not self.pre else self.pre + code

    def name(self):
        self.n += 1
        return '%s-%02d' % (self.prefix, self.n)

    def C(self, code, ttl=None, err=False, nopre=False, alt=None, setup=None):
        """A code example. setup: lines that run first but are not shown (the shared table of the chapter);
        the Try it copy and every check still include them (the block's `pre`)."""
        if setup:
            pre = self.full(setup).strip('\n'); shown = code.strip('\n')
            b = self.C(pre + '\n' + shown, ttl, err, True, alt)
            b['c'] = shown; b['pre'] = pre
            return b
        code = code.strip('\n') if nopre else self.full(code)
        if CHART_RE.search(code) and not err:
            o, summ, figs, imgs = chart_run(code, self.name())
            b = {"t": "code", "c": code, "o": o, "img": imgs, "sum": summ}
            if alt: b["alt"] = alt
        else:
            b = {"t": "code", "c": code, "o": run(code, err)}
        if ttl: b["ttl"] = ttl
        if err: b["err"] = True
        return b

    def P(self, q, hint, sol, why, starter=None, chart=None):
        sol = self.full(sol)
        t = {"q": q, "hint": hint, "sol": sol, "why": why}
        if CHART_RE.search(sol):
            o, summ, figs, imgs = chart_run(sol, self.name())
            t.update(out=o, img=imgs, sum=summ)
            if chart:
                bad = check(chart, figs); assert not bad, (q, bad)
                st = starter if starter is not None else self.pre
                if st.strip():
                    so, ss, sfigs, _ = chart_run(st)
                    assert check(chart, sfigs) or so != o, ('starter already passes', q)
                t["chart"] = chart
        else:
            assert chart is None
            t["out"] = run(sol)
        if starter is not None: t["starter"] = starter
        elif self.pre: t["starter"] = self.pre
        return t

    def PRED(self, code, opts, a, e, q=None):
        code = self.full(code); out = run(code)
        assert opts[a].strip('`') == out, (opts[a], out)
        for j, x in enumerate(opts):
            if j != a: assert x.strip('`') != out, ('two right options', x)
        b = {"t": "pred", "chk": 1, "c": code, "o": opts, "a": a, "e": e}
        if q: b["q"] = q
        return b

    def Q(self, q, opts, a, e, code=None):
        x = {"q": q, "o": opts, "a": a, "e": e}
        if code:
            code = self.full(code); out = run(code)
            assert opts[a].strip('`') == out, (q, opts[a], out)
            for j, o in enumerate(opts):
                if j != a: assert o.strip('`') != out, ('two right options', o)
            x["c"] = code; x["chk"] = 1
        return x


def grid(m, **o):
    return Raw('V.grid(' + json.dumps([[str(x) for x in r] for r in m], ensure_ascii=False) + ', ' + json.dumps(o, ensure_ascii=False) + ')')


def cat(*parts):
    return Raw(' + '.join(p if isinstance(p, Raw) else json.dumps(p, ensure_ascii=False) for p in parts))


def js(v, ind=0):
    """Write a value as JS. Code strings use R`` so they read like the other chapter files."""
    if isinstance(v, Raw): return str(v)
    if isinstance(v, dict):
        return '{ ' + ', '.join((k if re.match(r'^[A-Za-z_]\w*$', k) else json.dumps(k)) + ': ' + js(x, ind) for k, x in v.items()) + ' }'
    if isinstance(v, list):
        if all(isinstance(x, (str, int, float)) and not isinstance(x, Raw) and '\n' not in str(x) for x in v) and len(json.dumps(v, ensure_ascii=False)) < 110:
            return json.dumps(v, ensure_ascii=False)
        return '[\n' + ',\n'.join('  ' * (ind + 1) + js(x, ind + 1) for x in v) + '\n' + '  ' * ind + ']'
    if isinstance(v, str) and '\n' in v and '`' not in v and '${' not in v and '\\' not in v:
        return 'R`\n' + v + '`'
    return json.dumps(v, ensure_ascii=False)


def write_chapter(fname, ch, poster=None, note='generated'):
    heads = [b['text'] for b in ch['body'] if b['t'] == 'h']
    assert len(heads) == len(set(heads)), 'two sections with the same heading'
    s = '/* Chapter: %s (%s by gen/%s; every output came from running the code) */\nchapter(%s);\n' % (ch['title'], note, os.path.basename(sys.argv[0]), js(ch))
    if poster: s += 'POSTERS[%s] = %s;\n' % (json.dumps(ch['id']), js(poster))
    open(os.path.join(HUB, 'ch', fname), 'w', encoding='utf-8').write(s)
    nb = len(ch['body']); nc = sum(1 for b in ch['body'] if b['t'] == 'code')
    print(fname, 'blocks', nb, 'code', nc, 'sections', len(heads), 'pictures', len(IMGS), 'quiz', len(ch.get('quiz', [])), 'cards', len(ch.get('cards', [])))
    return heads
