import glob, os, shutil, subprocess
here = os.path.dirname(os.path.abspath(__file__))
subprocess.run(['node', 'static_pages.js'], cwd=here, check=True)
base = open(os.path.join(here, 'base.html'), encoding='utf-8').read()
files = ['viz.js', 'viz2.js', 'art.js', 'parts.js'] + sorted(glob.glob(os.path.join(here, 'ch', '*.js'))) + ['decks.js', 'realdata.js'] + sorted(glob.glob(os.path.join(here, 'posters_*.js'))) + sorted(glob.glob(os.path.join(here, 'ov_*.js'))) + ['mixed.js', 'sheets.js', 'videos.js', 'reference.js', 'exercises.js', 'bigtests.js', 'projects.js', 'engine.js']
js = '\n'.join(open(f if os.path.isabs(f) else os.path.join(here, f), encoding='utf-8').read() for f in files)
assert '</script' not in js.lower()
page = base.replace('/*@@SCRIPTS@@*/', js)
nojs = open(os.path.join(here, 'out', 'nojs_home.html'), encoding='utf-8').read()
shell = '<main class="main" id="main"><div class="col" id="view"></div></main>'
assert shell in page
page = page.replace(shell, '<main class="main" id="main"><div class="col" id="view">' + nojs + '</div></main>')
page = page.replace('<meta name="claude:viewport-fit-sides" content="cover">\n', '')
cut = page.index('</style>') + len('</style>')
head, body = page[:cut], page[cut:]
reset = ('<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
         '[hidden]{display:none!important}img{max-width:100%}</style>\n')
desc = 'A free, interactive Python course for aspiring data analysts: ' + str(len(glob.glob(os.path.join(here, 'ch', '*.js')))) + ' chapters, a real Python runner in the browser with answer checking, teacher videos, quizzes, flashcards, a glossary and a full Python reference.'
html = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
        '<meta name="description" content="' + desc + '">\n'
        '<link rel="canonical" href="https://puttasrinathraju.github.io/python-study-hub/">\n'
        '<meta property="og:title" content="Python Study Hub: learn Python for data analysis">\n'
        '<meta property="og:description" content="' + desc + '">\n'
        '<link rel="sitemap" type="application/xml" href="sitemap.xml">\n'
        '<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 40 40%27%3E%3Crect width=%2740%27 height=%2740%27 rx=%2710%27 fill=%27%232C68B0%27/%3E%3Ctext x=%2720%27 y=%2726%27 text-anchor=%27middle%27 font-family=%27monospace%27 font-size=%2715%27 font-weight=%27700%27 fill=%27white%27%3E%26gt;%26gt;%26gt;%3C/text%3E%3C/svg%3E">\n'
        + reset + head + '\n</head>\n<body>\n' + body + '\n</body>\n</html>\n')
out = os.path.join(here, 'site')
os.makedirs(out, exist_ok=True)
open(os.path.join(out, 'index.html'), 'w', encoding='utf-8').write(html)
shutil.copy(os.path.join(here, 'py-worker.js'), os.path.join(out, 'py-worker.js'))
shutil.copy(os.path.join(here, 'sw.js'), os.path.join(out, 'sw.js'))
os.makedirs(os.path.join(out, 'img'), exist_ok=True)
os.makedirs(os.path.join(out, 'data'), exist_ok=True)
for f in glob.glob(os.path.join(here, 'data', '*.csv')): shutil.copy(f, os.path.join(out, 'data'))
for f in glob.glob(os.path.join(here, 'img', '*.webp')) + glob.glob(os.path.join(here, 'img', 'sheet-*.jpg')): shutil.copy(f, os.path.join(out, 'img'))
open(os.path.join(out, '.nojekyll'), 'w').write('')
open(os.path.join(here, 'out', 'all_site.js'), 'w', encoding='utf-8').write(js)
print('site built', len(html) // 1024, 'KB')
