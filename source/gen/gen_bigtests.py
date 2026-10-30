# Big Tests: 25 questions per chapter (Parts 1-4). Every code answer is run in real Python here.
import subprocess, sys, json, tempfile, os, re, importlib.util, glob
WORK = tempfile.mkdtemp()
import shutil
for _f in glob.glob(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'hub2', 'data', '*.csv')): shutil.copy(_f, WORK)  # sample data, also in the browser runner
def run(code):
    p = subprocess.run([sys.executable, '-c', code], capture_output=True, text=True, cwd=WORK, timeout=30, input='')
    ok = p.returncode == 0 and not p.stderr.strip()
    return ok, (p.stdout.rstrip('\n') if ok else (p.stdout + p.stderr.strip().split('\n')[-1]).strip())
def tick(s): return s[1:-1] if s.startswith('`') and s.endswith('`') else s
def build(cid, Q, heads):
    out, lv = [], {1: 0, 2: 0, 3: 0}
    for n, x in enumerate(Q):
        t = x['ty']; tag = f'{cid} Q{n + 1}'
        assert x['sec'] in heads, (tag, 'unknown section', x['sec'])
        lv[x['lv']] += 1
        if t == 'out':
            ok, o = run(x['c']); assert ok, (tag, o)
            assert tick(x['o'][x['a']]) == o, (tag, 'answer', x['o'][x['a']], o)
            for j, opt in enumerate(x['o']):
                if j != x['a']: assert tick(opt) != o, (tag, 'two right options', opt)
        elif t == 'mc':
            if x.get('v'):
                ok, o = run(x['v']); assert ok and o == 'True', (tag, 'check failed', o)
        elif t == 'bug':
            lines = x['c'].split('\n'); k = x['line'] - 1
            ok, got = run(x['c']); assert got != x['want'], (tag, 'buggy code already works')
            x['got'] = re.sub(r' at 0x[0-9a-f]+', ' at 0x...', got)
            for j, opt in enumerate(x['o']):
                fixed = '\n'.join(lines[:k] + [re.match(r'\s*', lines[k]).group(0) + tick(opt)] + lines[k + 1:])
                ok, o = run(fixed)
                if j == x['a']: assert ok and o == x['want'], (tag, 'fix does not work', o); x['fixed'] = fixed
                else: assert not (ok and o == x['want']), (tag, 'wrong fix also works', opt)
        elif t == 'code':
            ok, o = run(x['sol']); assert ok, (tag, o); x['out'] = o
            ok2, o2 = run(x.get('starter', '')); assert not (ok2 and o2 == o), (tag, 'starter already solves it')
        elif t == 'fix':
            ok, w = run(x['fixed']); assert ok, (tag, 'fixed code fails', w); x['want'] = w
            ok, got = run(x['c']); assert not (ok and got == w), (tag, 'buggy code already works'); x['got'] = re.sub(r' at 0x[0-9a-f]+', ' at 0x...', got)
        elif t == 'type':
            ok, o = run(x['c']); assert ok, (tag, o); x['ans'] = o
        else: raise ValueError(t)
        out.append(x)
    assert len(out) >= 25 and lv[1] >= 8 and lv[2] >= 10 and lv[3] >= 7, (cid, len(out), lv)
    return out
# chapter headings (to check every 'sec' exists), read from the site data
here = os.path.dirname(os.path.abspath(__file__)); hub = os.path.join(here, '..', 'hub2')
heads_js = subprocess.run(['node', '-e', '''
global.window = global; const fs = require("fs"); const vm = require("vm");
const files = ["viz.js","viz2.js","art.js","parts.js",...fs.readdirSync("ch").sort().map(x => "ch/" + x),"decks.js","realdata.js",...fs.readdirSync(".").filter(x => /^ov_.*\\.js$/.test(x)).sort(),"mixed.js"];
for (const f of files) vm.runInThisContext(fs.readFileSync(f, "utf8"));
const o = {}; for (const c of CHAPTERS) o[c.id] = c.body.filter(b => b.t === "h").map(b => b.text); console.log(JSON.stringify(o));'''], capture_output=True, text=True, cwd=hub)
HEADS = json.loads(heads_js.stdout)
ALL = {}
for f in sorted(glob.glob(os.path.join(here, 'bt', 'bt_*.py'))):
    spec = importlib.util.spec_from_file_location(os.path.basename(f)[:-3], f); m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
    ALL[m.CID] = build(m.CID, m.Q, HEADS[m.CID])
open(os.path.join(hub, 'bigtests.js'), 'w', encoding='utf-8').write('/* Big Tests: 25 questions per chapter. Generated: every code answer was run in real Python. */\nvar BIGTESTS = ' + json.dumps(ALL, ensure_ascii=False, indent=1) + ';\n')
print({k: len(v) for k, v in ALL.items()})
