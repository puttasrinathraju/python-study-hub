import json, subprocess, sys, os, tempfile
items = json.load(open('out/items.json'))
only = sys.argv[1] if len(sys.argv) > 1 else None
bad = 0
work = tempfile.mkdtemp()
import shutil, glob
for f in glob.glob('data/*.csv'): shutil.copy(f, work)
for it in items:
    if only and not it['id'].startswith(only): continue
    p = subprocess.run([sys.executable, '-c', it['code']], capture_output=True, text=True, timeout=20, cwd=work)
    norm = lambda s: '\n'.join(l.rstrip() for l in s.strip('\n').rstrip().split('\n'))
    if it['err']:
        got = (p.stderr.strip().split('\n') or [''])[-1].strip()
        exp = it['out'].strip().split('\n')[-1].strip()
        # allow printed output before the error
        ok = got == exp
        if ok and len(it['out'].strip().split('\n')) > 1:
            ok = norm(p.stdout) == norm('\n'.join(it['out'].strip().split('\n')[:-1]))
    else:
        got = norm(p.stdout); exp = norm(it['out'])
        ok = (got == exp) and p.returncode == 0
        if p.returncode != 0: got += '\n[STDERR] ' + p.stderr.strip().split('\n')[-1]
    if not ok:
        bad += 1
        print('=' * 60); print('FAIL', it['id']); print('--- code'); print(it['code']); print('--- expected'); print(exp); print('--- got'); print(got)
print('checked', len([i for i in items if not only or i['id'].startswith(only)]), 'failed', bad)
