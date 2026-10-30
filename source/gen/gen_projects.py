# Projects: 3 per Part (Beginner, Intermediate, Challenging). Writes hub2/projects.js.
# Every test is run against the model answer in real Python, with the inputs fed in the same way the
# browser runner does it (the prompt and the typed value are echoed into the output).
import subprocess, sys, json, tempfile, os, re, importlib.util, glob, shutil
here = os.path.dirname(os.path.abspath(__file__)); hub = os.path.join(here, '..', 'hub2')
WORK = tempfile.mkdtemp()
AN_SRC = open(os.path.join(here, 'pj_analyse.py'), encoding='utf-8').read()
ns = {}; exec(AN_SRC, ns); analyse = ns['analyse']

def prelude(inputs):
    return ('_hub_inputs = ' + repr(list(inputs)) + '\n'
            'def input(prompt=""):\n    value = _hub_inputs.pop(0)\n    print(str(prompt) + value)\n    return value\n')
DATA = glob.glob(os.path.join(hub, 'data', '*.csv'))
SEP = '--- %s ---'
def setup(t):
    """Python that prepares the folder for a test: remove old files, write the test's files (the browser runs the same code first)."""
    if not (t.get('files') or t.get('remove') or t.get('outfile') or t.get('data')): return ''
    gone = list(t.get('remove', [])) + ([t['outfile']] if t.get('outfile') else [])
    return ('# hotel_bookings.csv\nimport os as _o, json as _j\nfor _n in _j.loads(%s):\n    if _o.path.exists(_n): _o.remove(_n)\n'
            'for _n, _t in _j.loads(%s).items():\n    with open(_n, "w") as _f: _f.write(_t)\n') % (json.dumps(json.dumps(gone)), json.dumps(json.dumps(t.get('files', {}))))
def post(t):
    """Python that shows the file the program had to write (after a separator line)."""
    if not t.get('outfile'): return ''
    n = json.dumps(t['outfile'])
    return '\nimport os as _o\nprint(%s)\nprint(open(%s).read() if _o.path.exists(%s) else "(file not written)", end="")\n' % (json.dumps(SEP % t['outfile']), n, n)
def full(t, code): return setup(t) + prelude(t['inputs']) + code + post(t)
def run(code, t):
    work = tempfile.mkdtemp(dir=WORK)
    for f in DATA: shutil.copy(f, work)
    p = subprocess.run([sys.executable, '-c', full(t, code)], capture_output=True, text=True, cwd=work, timeout=30)
    return p.returncode == 0 and not p.stderr.strip(), p.stdout.rstrip('\n'), p.stderr.strip()
def norm(s): return re.sub(r'\s+', ' ', s.strip())
def split_out(out, t):
    if t.get('outfile') and (SEP % t['outfile']) in out.split('\n'):
        L = out.split('\n'); k = L.index(SEP % t['outfile']); return L[:k], L[k + 1:]
    return out.split('\n'), []
def has_lines(out, t, lines, flines=()):
    so, fo = split_out(out, t)
    got, fgot = set(norm(l) for l in so), set(norm(l) for l in fo)
    return [l for l in lines if norm(l) not in got] + [l for l in flines if norm(l) not in fgot]

# What each Part may use. A feature is "not allowed yet" in a project whose Part is smaller than the Part that teaches it.
FEATURES = [
    (2, '`if` / `elif` / `else` statements', 'Part 2 (Conditions)', dict(any=['node:If'])),
    (2, '`for` and `while` loops', 'Part 2 (Loops)', dict(any=['node:For', 'node:While', 'node:Break', 'node:Continue'])),
    (3, 'indexing and slicing with `[ ]`', 'Part 3 (Strings)', dict(any=['node:Subscript'])),
    (3, 'methods like `.strip()` or `.upper()`', 'Part 3 (Strings)', dict(prefix='method:', exc=['method:format', 'method:title'])),
    (3, 'lists, tuples, sets and dictionaries', 'Part 3 (Collections)', dict(any=['node:List', 'node:Dict', 'node:Set'])),
    (3, 'comprehensions', 'Part 3 (Comprehensions)', dict(any=['node:ListComp', 'node:DictComp', 'node:SetComp', 'node:GeneratorExp'])),
    (4, 'your own functions (`def`, `lambda`)', 'Part 4 (Functions)', dict(any=['node:FunctionDef', 'node:Lambda', 'node:Return', 'node:Yield'])),
    (5, '`try` / `except`', 'Part 5 (Errors)', dict(any=['node:Try', 'node:Raise'])),
    (5, '`with` and files', 'Part 5 (Files)', dict(any=['node:With'])),
    (5, '`import`', 'Part 5 (Modules)', dict(any=['node:Import', 'node:ImportFrom'])),
    (6, 'classes', 'Part 6 (OOP)', dict(any=['node:ClassDef'])),
]
# Built-in functions each Part adds (read from the chapter sources). A project may use those of its Part and earlier ones.
# Parts without an entry skip the built-in check.
BUILTINS = {1: ['print', 'input', 'int', 'float', 'str', 'bool', 'type', 'isinstance', 'round', 'id'],
            2: ['range', 'enumerate', 'zip'],
            3: ['len', 'list', 'tuple', 'set', 'dict', 'frozenset', 'sum', 'min', 'max', 'sorted', 'any', 'all'],
            4: ['map', 'filter', 'iter', 'next', 'help'],
            5: ['open', 'dir', 'Exception', 'ValueError', 'TypeError', 'KeyError', 'IndexError', 'ZeroDivisionError',
                'FileNotFoundError', 'AssertionError', 'AttributeError']}
def rules(part):
    r = {'ban': [dict(label=l, where=w, **m) for p, l, w, m in FEATURES if p > part]}
    if part in BUILTINS: r['allow'] = [f for k in sorted(BUILTINS) if k <= part for f in BUILTINS[k]]
    return r
def banned_found(feat, rule):
    if 'any' in rule: return [k for k in rule['any'] if feat.get(k)]
    return [k for k in feat if k.startswith(rule['prefix']) and k not in rule['exc']]

LEVEL = {1: 'Beginner', 2: 'Intermediate', 3: 'Challenging'}
OUT, PARTS, RULES, WEAK, ITEMS = {}, {}, {}, {}, []
for f in sorted(glob.glob(os.path.join(here, 'pj', 'pj_part*.py'))):
    spec = importlib.util.spec_from_file_location(os.path.basename(f)[:-3], f); m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
    part = m.PART; RULES[part] = rules(part)
    PARTS[part] = dict(title=m.TITLE, intro=m.INTRO, ids=[p['id'] for p in m.PROJECTS])
    assert [p['level'] for p in m.PROJECTS] == [1, 2, 3], part
    for P in m.PROJECTS:
        pid = P['id']; tests = []
        assert 5 <= len(P['tasks']) <= 10 and len(P['hints']) == 3, pid
        for k in ('main', 'logic', 'edge'): assert any(t['kind'] == k for t in P['tests']), (pid, 'no test of kind', k)
        # 1. every test: the model answer must print every expected line
        for t in P['tests']:
            exp = P['expect'](t['inputs'], t) if P['expect'].__code__.co_argcount == 2 else P['expect'](t['inputs'])
            fexp = []
            if isinstance(exp, tuple): exp, fexp = exp
            if t.get('check'): exp = [l for l in exp if any(l.startswith(c) for c in t['check'])]
            assert exp, (pid, t['name'], 'no lines to check')
            ok, out, err = run(P['sol'], t); assert ok, (pid, t['name'], err)
            miss = has_lines(out, t, exp, fexp); assert not miss, (pid, t['name'], 'missing', miss, out)
            rec = dict(name=t['name'], kind=t['kind'], inputs=t['inputs'], expect=exp, tip=t.get('tip', ''), out=out)
            for k in ('files', 'remove', 'outfile', 'data'):
                if t.get(k): rec[k] = t[k]
            if fexp: rec['fexpect'] = fexp
            if setup(t): rec['setup'] = setup(t)
            if post(t): rec['post'] = post(t).strip()
            tests.append(rec)
        assert len(set(json.dumps([t['inputs'], t.get('files')]) for t in tests)) == len(tests), (pid, 'two tests are the same')
        # 2. the starter must not pass, and the weak answer must pass fewer tests than the model answer
        def passed(code): return sum(1 for t in tests if (lambda r: r[0] and not has_lines(r[1], t, t['expect'], t.get('fexpect', [])))(run(code, t)))
        assert passed(P['starter']) == 0, (pid, 'starter passes a test')
        nw = passed(P['weak']); assert nw < len(tests), (pid, 'weak answer passes everything')
        # 3. the model answer uses every required feature, nothing from later Parts, and passes every readability check
        a = analyse(P['sol'], P['starter']); assert a['ok'], (pid, a)
        for n in P['need']: assert sum(a['feat'].get(k, 0) for k in n['any']) >= n['min'], (pid, 'model misses', n['label'])
        for r in RULES[part]['ban']: assert not banned_found(a['feat'], r), (pid, 'model uses', r['label'])
        if 'allow' in RULES[part]:
            extra = [k[8:] for k in a['feat'] if k.startswith('builtin:') and k[8:] not in RULES[part]['allow'] and k[8:] not in a['defs']]; assert not extra, (pid, extra)
        assert all(len(n) >= 3 for n in a['names']) and a['comments'] >= 1 and not a['long'] and not a['tabs'] and not a['indent'] and not a['tight'], (pid, a)
        assert all(len(l) <= 100 for l in P['sol'].split('\n'))
        WEAK[pid] = dict(code=P['weak'], passed=nw, total=len(tests))
        ex = tests[0]
        OUT[pid] = dict(id=pid, part=part, n=m.PROJECTS.index(P) + 1, level=P['level'], levelName=LEVEL[P['level']], title=P['title'], short=P['short'],
                        story=P['story'], objectives=P['objectives'], may=P['may'], mustnot=P['mustnot'], tasks=P['tasks'], lines=P['lines'],
                        rules=P['rules'], sample=P.get('sample', {}), edge=P['edge'], hints=P['hints'], starter=P['starter'], sol=P['sol'], need=P['need'],
                        example=dict(inputs=ex['inputs'], out=ex['out']),
                        tests=[{k: v for k, v in t.items() if k != 'out'} for t in tests])
        ITEMS.extend(dict(id='pj:%s:%d' % (pid, j), code=full(t, P['sol']), out=t['out'], err=False) for j, t in enumerate(tests))
        print(pid, 'tests', len(tests), 'weak passes', nw)
js = ('/* Projects: 3 per Part. Generated by gen/gen_projects.py: every expected line was checked against the model answer in real Python. */\n'
      'var PJ_AN = ' + json.dumps(AN_SRC, ensure_ascii=False) + ';\n'
      'var PJ_RULES = ' + json.dumps(RULES, ensure_ascii=False) + ';\n'
      'var PJ_PARTS = ' + json.dumps(PARTS, ensure_ascii=False, indent=1) + ';\n'
      'var PROJECTS = ' + json.dumps(OUT, ensure_ascii=False, indent=1) + ';\n')
open(os.path.join(hub, 'projects.js'), 'w', encoding='utf-8').write(js)
os.makedirs(os.path.join(hub, 'out'), exist_ok=True)
json.dump(WEAK, open(os.path.join(hub, 'out', 'pj_weak.json'), 'w'), ensure_ascii=False, indent=1)
json.dump(ITEMS, open(os.path.join(hub, 'out', 'pj_items.json'), 'w'), ensure_ascii=False)
print('projects', len(OUT))
