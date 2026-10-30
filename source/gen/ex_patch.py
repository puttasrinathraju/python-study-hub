import re
p = 'engine.js'; s = open(p, encoding='utf-8').read()
def rep(a, b, cnt=1):
    global s
    assert s.count(a) == cnt, (a[:80], s.count(a)); s = s.replace(a, b)
EXJS = r'''
/* ---------- Quick exercises: fill in the blanks ---------- */
var EXS = window.EXERCISES || {};
function exNorm(v){ return String(v).trim().replace(/[‘’“”']/g, '"').replace(/\s+/g, ' ').replace(/\s*([()\[\]{},:+\-*\/%=<>!.&|^~])\s*/g, '$1'); }
function exCount(cid){ var st = store.get('ex', {}), n = 0; (EXS[cid] || []).forEach(function(x, i){ if (st[cid + ':' + i]) n++; }); return n; }
function ExBox(el, cid, i){
  var x = EXS[cid][i], st = store.get('ex', {}), k = 0;
  var code = hl(x.c.replace(/___/g, '\u0001')).replace(/\u0001/g, function(){
    var j = k++, w = Math.max(3, Math.max.apply(null, x.a[j].map(function(a){ return a.length; })) + 2);
    return '<input class="exin" data-b="' + j + '" style="width:' + w + 'ch" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Blank ' + (j + 1) + ' of ' + x.a.length + '">';
  });
  el.className = 'exq';
  el.innerHTML = '<div class="exh"><span>Exercise ' + (i + 1) + ' of ' + EXS[cid].length + '</span><span class="exst">' + (st[cid + ':' + i] ? '✓ Solved' : '') + '</span></div><p class="exqq">' + md(x.q) + '</p><pre class="excode">' + code + '</pre>' +
    '<div class="row"><button class="btn pri exck" type="button">Check</button><button class="btn exsh" type="button">Show answer</button></div><div class="exfb" aria-live="polite"></div>';
  var ins = $$('.exin', el), fb = $('.exfb', el);
  function done(own){
    fb.innerHTML = '<div class="rchk ' + (own ? 'ok' : 'almost') + '"><b>' + (own ? 'Correct!' : 'Here is the answer.') + '</b> ' + md(x.e) + '<div class="exo">Output</div><pre>' + esc(x.o) + '</pre></div>';
    if (own) { var s2 = store.get('ex', {}); s2[cid + ':' + i] = 1; store.set('ex', s2); $('.exst', el).textContent = '✓ Solved'; var pc = document.getElementById('exc-' + cid); if (pc) pc.textContent = exCount(cid) + '/' + EXS[cid].length; }
  }
  function check(){
    var bad = 0, empty = 0, caseHint = false;
    ins.forEach(function(inp, j){
      var v = exNorm(inp.value), ok = x.a[j].some(function(a){ return exNorm(a) === v; });
      if (!inp.value.trim()) empty++;
      if (!ok && x.a[j].some(function(a){ return exNorm(a).toLowerCase() === v.toLowerCase(); })) caseHint = true;
      inp.classList.toggle('ok', ok); inp.classList.toggle('no', !ok && !!inp.value.trim());
      if (!ok) bad++;
    });
    if (!bad) return done(true);
    fb.innerHTML = '<div class="rchk no"><b>Not yet.</b> ' + (empty === ins.length ? 'Type your answer in the box' + (ins.length > 1 ? 'es' : '') + ' first.' : caseHint ? 'Check your capital letters: Python treats <code>True</code> and <code>true</code> as different words.' : (ins.length > 1 ? bad + ' of ' + ins.length + ' boxes are not right yet. ' : '') + 'Look again at the question, or press <b>Show answer</b>.') + '</div>';
  }
  $('.exck', el).onclick = check;
  $('.exsh', el).onclick = function(){ ins.forEach(function(inp, j){ inp.value = x.a[j][0]; inp.classList.remove('no'); inp.classList.add('ok'); }); done(false); };
  ins.forEach(function(inp, j){ inp.addEventListener('keydown', function(e){ if (e.key === 'Enter') { e.preventDefault(); if (ins[j + 1] && !ins[j + 1].value) ins[j + 1].focus(); else check(); } }); });
}
function exSection(c){
  var L = EXS[c.id]; if (!L || !L.length) return '';
  return '<section class="sec"><h2 id="' + c.id + '-ex">Quick exercises</h2><p class="prose muted">Type the missing code in each box, then press <b>Check</b> (or Enter). Extra spaces and \'single\' or "double" quotes do not matter. <span id="exc-' + c.id + '">' + exCount(c.id) + '/' + L.length + '</span> solved.</p>' + L.map(function(x, i){ return '<div class="exmount" data-c="' + c.id + '" data-i="' + i + '"></div>'; }).join('') + '</section>';
}
function mountEx(root){ $$('.exmount', root).forEach(function(m){ ExBox(m, m.getAttribute('data-c'), +m.getAttribute('data-i')); }); }
function vExercises(){
  var total = 0, solved = 0;
  Object.keys(EXS).forEach(function(cid){ total += EXS[cid].length; solved += exCount(cid); });
  var h = '<header class="chead"><div class="num">Study tool</div><h1>Quick exercises</h1><p class="lead">' + total + ' short fill-in-the-blank exercises: 5 for every chapter. Type the missing code, press <b>Check</b>, and see the real output. Your progress is saved in this browser.</p></header>' +
    '<div class="exprog"><div class="exbar"><span style="width:' + (total ? Math.round(solved / total * 100) : 0) + '%"></span></div><b>' + solved + ' of ' + total + ' solved</b></div>';
  PARTS.forEach(function(p){
    var chs = SEQ.filter(function(c){ return !c.ov && c.part === p.n && EXS[c.id]; });
    if (!chs.length) return;
    h += '<section class="sec"><h2>Part ' + p.n + ': ' + esc(p.title) + '</h2>' + chs.map(function(c){
      return '<details class="exch" data-c="' + c.id + '"><summary><span>' + c.num + '. ' + esc(c.nav || c.title) + '</span><span class="muted" id="exc-' + c.id + '">' + exCount(c.id) + '/' + EXS[c.id].length + '</span></summary><div class="exlist"></div><div class="row"><button class="btn" type="button" data-go="' + c.id + '">Open the chapter →</button></div></details>';
    }).join('') + '</section>';
  });
  view.className = 'col'; view.innerHTML = h;
  $$('details.exch', view).forEach(function(d){ d.addEventListener('toggle', function(){ if (!d.open || d.getAttribute('data-m')) return; d.setAttribute('data-m', '1'); var cid = d.getAttribute('data-c'); $('.exlist', d).innerHTML = EXS[cid].map(function(x, i){ return '<div class="exmount" data-c="' + cid + '" data-i="' + i + '"></div>'; }).join(''); mountEx(d); }); });
}
'''
rep('\n/* ---------- Router ---------- */', EXJS + '\n/* ---------- Router ---------- */')
rep("glossary: vGlossary, videos: vVideos, reference: vReference };", "glossary: vGlossary, videos: vVideos, reference: vReference, exercises: vExercises };")
rep("videos: 'Videos', reference: 'Python reference' })[id];", "videos: 'Videos', reference: 'Python reference', exercises: 'Quick exercises' })[id];")
rep("['reference', 'Reference', IC.exam],", "['exercises', 'Exercises', IC.key], ['reference', 'Reference', IC.exam],")
# chapter: section before the quiz, chip, mount
rep("  if (c.quiz && c.quiz.length) h += '<section class=\"sec\"><h2 id=\"' + c.id + '-quiz\">'", "  if (!OV) h += exSection(c);\n  if (c.quiz && c.quiz.length) h += '<section class=\"sec\"><h2 id=\"' + c.id + '-quiz\">'")
rep("  if (c.quiz && c.quiz.length) chips.push(", "  if (!OV && EXS[c.id]) chips.push('<button type=\"button\" data-s=\"' + c.id + '-ex\">Exercises</button>');\n  if (c.quiz && c.quiz.length) chips.push(")
rep("  if (c.quiz && c.quiz.length) Quiz($('#quizBox'), c.quiz, c.id);", "  mountEx(view);\n  if (c.quiz && c.quiz.length) Quiz($('#quizBox'), c.quiz, c.id);")
# home tools: add a card after Final exam
rep('<button class="tool" type="button" data-go="cheatsheet"><b>Cheat sheet</b>', '<button class="tool" type="button" data-go="exercises"><b>Quick exercises</b><span>\' + Object.keys(EXS).reduce(function(a, k){ return a + EXS[k].length; }, 0) + \' fill-in-the-blank exercises, 5 per chapter, checked instantly.</span></button><button class="tool" type="button" data-go="cheatsheet"><b>Cheat sheet</b>')
open(p, 'w', encoding='utf-8').write(s)
p = 'base.html'; s = open(p, encoding='utf-8').read()
css = '''
.exq{border:1px solid var(--line);border-radius:12px;padding:12px 14px;margin:12px 0;background:var(--surface)}
.exh{display:flex;justify-content:space-between;gap:8px;font-size:13px;color:var(--muted)}
.exst{color:var(--tip);font-weight:700}
.exqq{margin:6px 0 4px;font-size:16px}
.excode{margin:8px 0 10px;font-family:var(--mono);font-size:14px;line-height:1.75;white-space:pre;overflow-x:auto;background:var(--code-bg);border:1px solid var(--line);border-radius:10px;padding:10px 12px}
.exin{font:inherit;font-size:14px;color:var(--ink);background:var(--surface);border:1.5px dashed var(--accent);border-radius:6px;padding:1px 4px;margin:0 1px;max-width:26ch;vertical-align:baseline}
.exin:focus{outline:2px solid var(--accent);outline-offset:1px;border-style:solid}
.exin.ok{border:1.5px solid var(--tip);background:var(--tip-soft)}
.exin.no{border:1.5px solid var(--trap);background:var(--trap-soft)}
.exfb{margin-top:10px}.exfb .rchk{border:1px solid var(--line);border-radius:10px}
.exo{margin:8px 0 4px;font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.04em}
.exprog{display:flex;align-items:center;gap:12px;margin:4px 0 8px}.exbar{flex:1;height:10px;border-radius:99px;background:var(--surface2);overflow:hidden}.exbar span{display:block;height:100%;background:var(--tip)}
details.exch{border:1px solid var(--line);border-radius:12px;margin:10px 0;background:var(--surface);padding:0 14px}
details.exch summary{cursor:pointer;display:flex;justify-content:space-between;gap:10px;padding:12px 0;font-weight:600;list-style:none}
details.exch summary::-webkit-details-marker{display:none}
details.exch summary::before{content:"▸";color:var(--accent);margin-right:2px}details.exch[open] summary::before{content:"▾"}
details.exch summary span:first-child{flex:1}
details.exch .exq{background:var(--bg)}
details.exch .row{padding-bottom:12px}
'''
a = '.refn{color:var(--muted);font-size:14px}'
assert s.count(a) == 1; s = s.replace(a, a + css)
open(p, 'w', encoding='utf-8').write(s)
# build list, extract, static pages
p = 'build_site.py'; s = open(p, encoding='utf-8').read()
a = "'reference.js', 'engine.js']"; assert s.count(a) == 1; s = s.replace(a, "'reference.js', 'exercises.js', 'engine.js']"); open(p, 'w', encoding='utf-8').write(s)
p = 'extract.js'; s = open(p, encoding='utf-8').read()
a = "vm.runInContext('this.__R = REFERENCE', ctx);"; assert s.count(a) == 1
s = s.replace(a, "vm.runInContext(fs.readFileSync('exercises.js', 'utf8'), ctx, { filename: 'exercises.js' }); vm.runInContext('this.__X = EXERCISES', ctx); let nEx = 0; for (const [cid, L] of Object.entries(ctx.__X)) L.forEach((x, i) => { let k = 0; add('ex:' + cid + ':' + i, x.c.replace(/___/g, () => x.a[k++][0]), x.o, false, false, null); nEx++; }); stats.exercises = nEx;\n" + a)
open(p, 'w', encoding='utf-8').write(s)
p = 'static_pages.js'; s = open(p, encoding='utf-8').read()
a = ", 'reference.js'];"; assert s.count(a) == 1; s = s.replace(a, ", 'reference.js', 'exercises.js'];")
a = "SH: SHEETS }"; assert s.count(a) == 1; s = s.replace(a, "SH: SHEETS, EX: EXERCISES }")
a = "  if (c.quiz && c.quiz.length) b += '<section class=\"quiz\">"; assert s.count(a) == 1
s = s.replace(a, "  const EXL = !c.ov && ctx.D.EX[c.id];\n  if (EXL) b += '<section class=\"quiz\"><h2>Quick exercises</h2><p>Fill in each blank (<code>___</code>). The answers are hidden under each exercise.</p><ol>' + EXL.map(x => '<li><p>' + md(x.q) + '</p>' + code(x.c) + '<details><summary>Answer</summary><p>' + x.a.map(alts => '<code>' + esc(alts[0]) + '</code>').join(', ') + ' — ' + md(x.e) + '</p><p>Output:</p><pre class=\"out\">' + esc(x.o) + '</pre></details></li>').join('') + '</ol></section>';\n" + a)
open(p, 'w', encoding='utf-8').write(s)
print('ok')
