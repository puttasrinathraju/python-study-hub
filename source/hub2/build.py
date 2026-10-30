import glob, os, sys
here = os.path.dirname(os.path.abspath(__file__))
base = open(os.path.join(here, 'base.html'), encoding='utf-8').read()
parts = [open(os.path.join(here, f), encoding='utf-8').read() for f in ['viz.js', 'parts.js']]
parts += [open(f, encoding='utf-8').read() for f in sorted(glob.glob(os.path.join(here, 'ch', '*.js')))]
parts.append(open(os.path.join(here, 'engine.js'), encoding='utf-8').read())
js = '\n'.join(parts)
assert '</script' not in js.lower(), 'script close tag inside JS'
out = base.replace('/*@@SCRIPTS@@*/', js)
os.makedirs(os.path.join(here, 'out'), exist_ok=True)
p = os.path.join(here, 'out', 'python-study-hub.html')
open(p, 'w', encoding='utf-8').write(out)
open(os.path.join(here, 'out', 'all.js'), 'w', encoding='utf-8').write(js)
print('built', p, len(out)//1024, 'KB')
wrap = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><style>:root{color-scheme:light}body{margin:0;font:14px system-ui}img{max-width:100%}[hidden]{display:none!important}</style></head><body>' + out + '</body></html>'
open(os.path.join(here, 'out', 'preview.html'), 'w', encoding='utf-8').write(wrap)
