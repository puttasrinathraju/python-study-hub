/* Builds plain HTML pages of the whole course (site/learn/*.html) so AI tools and search engines,
   which do not run JavaScript, can read every chapter. The interactive site is unchanged. */
const fs = require('fs'), vm = require('vm'), path = require('path');
const BASE = 'https://puttasrinathraju.github.io/python-study-hub/';
const ctx = { console }; vm.createContext(ctx);
const files = ['viz.js', 'viz2.js', 'art.js', 'parts.js', ...fs.readdirSync('ch').sort().map(x => 'ch/' + x), 'decks.js', 'realdata.js',
  ...fs.readdirSync('.').filter(x => /^posters_.*\.js$/.test(x)).sort(), ...fs.readdirSync('.').filter(x => /^ov_.*\.js$/.test(x)).sort(), 'mixed.js', 'sheets.js', 'videos.js', 'reference.js', 'exercises.js', 'bigtests.js', 'projects.js'];
for (const f of files) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
vm.runInContext('this.D = { CH: CHAPTERS, OV: OVERVIEWS, PARTS: PARTS, V: VIDEOS, REF: REFERENCE, SH: SHEETS, EX: EXERCISES, BT: BIGTESTS, PJ: PROJECTS, PJP: PJ_PARTS }', ctx);
const { CH, OV, PARTS, V, REF, SH } = ctx.D;
CH.forEach((c, i) => c.num = i + 1);
OV.forEach(o => { o.id = 'overview' + o.part; o.ov = true; });
const SEQ = []; PARTS.forEach(p => { CH.filter(c => c.part === p.n).forEach(c => SEQ.push(c)); OV.filter(o => o.part === p.n).forEach(o => SEQ.push(o)); });

const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const md = s => s == null ? '' : String(s).split(/(`[^`]+`)/).map(p => (p.length > 1 && p[0] === '`' && p[p.length - 1] === '`') ? '<code>' + esc(p.slice(1, -1)) + '</code>'
  : esc(p).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/==([^=]+)==/g, '<mark>$1</mark>').replace(/\[\[(ok|no|warn|acc):([^\]]+)\]\]/g, '<span class="t-$1">$2</span>').replace(/\n/g, '<br>')).join('');
const plain = s => String(s || '').replace(/`/g, '').replace(/\*\*|==/g, '').replace(/\[\[\w+:([^\]]+)\]\]/g, '$1').replace(/\s+/g, ' ').trim();
const trim = s => String(s).replace(/^\n+/, '').replace(/\s+$/, '');
const code = (c, o, err, ttl) => '<figure class="code">' + (ttl ? '<figcaption>' + md(ttl) + '</figcaption>' : '') + '<pre><code>' + esc(trim(c)) + '</code></pre>' + (o != null && o !== '' ? '<p class="olbl">' + (err ? 'Error' : 'Output') + '</p><pre class="out">' + esc(trim(o)) + '</pre>' : '') + '</figure>';
const table = (head, rows, rowHead) => '<div class="tbl"><table><thead><tr>' + head.map(h => '<th>' + md(Array.isArray(h) ? h[0] : h) + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map((x, j) => (rowHead && j === 0) ? '<th scope="row">' + md(x) + '</th>' : '<td>' + md(x) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
const NOTE = { trap: 'Trap!', tip: 'Easy tip', key: 'Remember this', like: 'Think of it like this', why: 'Why analysts care' };

function block(b) {
  switch (b.t) {
    case 'h': return '<h2>' + md(b.text) + '</h2>';
    case 'h3': return '<h3>' + md(b.text) + '</h3>';
    case 'p': return '<p>' + md(b.b) + '</p>';
    case 'ul': return '<ul>' + b.items.map(x => '<li>' + md(x) + '</li>').join('') + '</ul>';
    case 'ol': return '<ol>' + b.items.map(x => '<li>' + md(x) + '</li>').join('') + '</ol>';
    case 'code': return code(b.c, b.o, b.err, b.ttl);
    case 'note': return '<aside class="note ' + (b.k || 'tip') + '"><strong>' + esc(b.h || NOTE[b.k || 'tip']) + '</strong>' + (b.b ? '<p>' + md(b.b) + '</p>' : '') + (b.items ? '<ul>' + b.items.map(x => '<li>' + md(x) + '</li>').join('') + '</ul>' : '') + (b.c ? code(b.c, b.o, b.err) : '') + '</aside>';
    case 'fig': return b.cap ? '<p class="cap">Diagram: ' + md(b.cap) + '</p>' : '';
    case 'table': return (b.title ? '<h3>' + md(b.title) + '</h3>' : '') + table(b.head, b.rows, b.master || b.rowHead) + (b.cap ? '<p class="cap">' + md(b.cap) + '</p>' : '');
    case 'cmp': return '<div class="cmp">' + [b.l, b.r].map(x => '<div><h4>' + md(x.h) + '</h4>' + (x.b ? '<p>' + md(x.b) + '</p>' : '') + (x.items ? '<ul>' + x.items.map(y => '<li>' + md(y) + '</li>').join('') + '</ul>' : '') + (x.c ? code(x.c, x.o, x.err) : '') + '</div>').join('') + '</div>';
    case 'prac': return '<ol class="tasks">' + b.items.map(t => '<li><p>' + md(t.q) + '</p>' + (t.starter ? code(t.starter, null, false, 'Starter code') : '') + (t.hint ? '<details><summary>Hint</summary><p>' + md(t.hint) + '</p></details>' : '') + (t.sol ? '<details><summary>Solution</summary>' + code(t.sol, t.out) + (t.why ? '<p>' + md(t.why) + '</p>' : '') + '</details>' : '') + '</li>').join('') + '</ol>';
    case 'anim': {
      const steps = b.trace ? b.trace.steps.map(s => s.c).filter(Boolean) : (b.frames || []).map(f => f.c).filter(Boolean);
      return '<section class="anim"><h3>Animated explainer: ' + md(b.title || '') + '</h3>' + (b.trace ? code(b.trace.code) : '') + '<ol>' + steps.map(s => '<li>' + md(s) + '</li>').join('') + '</ol></section>';
    }
    case 'deck': return '<section class="deck"><h3>Slides: ' + md(b.title || '') + '</h3><ol>' + b.s.map(s => '<li>' + (s.big ? '<p><b>' + md(s.big) + '</b></p>' : '') + (s.h ? '<p><b>' + md(s.h) + '</b></p>' : '') + (s.b ? '<p>' + md(s.b) + '</p>' : '') + (s.items ? '<ul>' + s.items.map(x => '<li>' + md(x) + '</li>').join('') + '</ul>' : '') + (s.c ? code(s.c, s.o, s.err) : '') + '</li>').join('') + '</ol></section>';
    case 'mm': return '<section class="mm"><h3>Mind map: ' + md(b.title || b.root) + '</h3><ul><li><b>' + esc(b.root) + '</b><ul>' + b.kids.map(k => '<li>' + esc(k.t) + (k.k ? '<ul>' + k.k.map(l => '<li>' + esc(typeof l === 'string' ? l : l.t) + '</li>').join('') + '</ul>' : '') + '</li>').join('') + '</ul></li></ul></section>';
    case 'pred': return '<section class="pred"><h3>Predict the output</h3><p>' + md(b.q || '') + '</p>' + code(b.c) + '<ol type="A">' + b.o.map(o => '<li>' + md(o) + '</li>').join('') + '</ol><details><summary>Answer</summary><p><b>' + md(b.o[b.a]) + '</b>. ' + md(b.e) + '</p></details></section>';
    case 'defs': return '<dl class="defs">' + b.items.map(d => '<dt>' + md(d.t) + '</dt><dd><p>' + md(d.d) + '</p>' + (d.c ? code(d.c, d.o, d.err) : '') + '</dd>').join('') + '</dl>';
    case 'vs': return '<section class="vs"><h3>Don\'t mix up: ' + md(b.title) + '</h3>' + table(b.head, b.rows, true) + (b.c ? code(b.c, b.o, b.err) : '') + (b.rule ? '<p><b>Rule of thumb:</b> ' + md(b.rule) + '</p>' : '') + '</section>';
    default: return '';
  }
}
function sheetText(s) {
  const t = s.title.map(x => Array.isArray(x) ? x[0] : x).join('');
  return '<section class="sheet"><h2>Picture cheat sheet: ' + esc(t) + '</h2>' + s.groups.map(g => (g.h ? '<h3>' + esc(g.h) + '</h3>' : '') +
    table(['', 'Symbol', ...g.cols, 'Picture and example'], g.rows.map(r => ['**' + r.name + '**', '`' + r.sym + '` ' + r.symName, ...r.facts.map(f => f[1].replace(/\n/g, ', ')), r.cap + (r.ex ? ' `' + r.ex + '`' : '')]), true)).join('') + (s.foot ? '<p class="cap">' + esc(s.foot) + '</p>' : '') + '</section>';
}
function page(id, title, desc, body, extraHead) {
  return '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>' + esc(title) + ' | Python Study Hub</title>\n<meta name="description" content="' + esc(desc) + '">\n<link rel="canonical" href="' + BASE + 'learn/' + id + '.html">\n<meta property="og:title" content="' + esc(title) + ' | Python Study Hub">\n<meta property="og:description" content="' + esc(desc) + '">\n<link rel="stylesheet" href="learn.css">\n' + (extraHead || '') + '</head>\n<body>\n<header class="top"><a class="brand" href="index.html">&gt;&gt;&gt; Python Study Hub</a><a class="go" href="../#' + (id === 'index' ? 'home' : id) + '">Open the interactive version ▶</a></header>\n<main>\n<p class="ver">This is the text version of the page. The <a href="../#' + (id === 'index' ? 'home' : id) + '">interactive version</a> adds a real Python runner with answer checking, animations, slides, videos, quizzes and flashcards.</p>\n' + body + '\n</main>\n<footer><a href="index.html">All chapters</a> · <a href="reference.html">Python reference</a> · <a href="glossary.html">Glossary</a> · <a href="cheatsheet.html">Cheat sheet</a></footer>\n</body>\n</html>\n';
}
const out = path.join('site', 'learn'); fs.mkdirSync(out, { recursive: true });
const urls = [];
const nav = (c) => { const i = SEQ.indexOf(c), p = SEQ[i - 1], n = SEQ[i + 1]; return '<nav class="pn">' + (p ? '<a href="' + p.id + '.html">← ' + esc(p.nav || p.title) + '</a>' : '<span></span>') + (n ? '<a href="' + n.id + '.html">' + esc(n.nav || n.title) + ' →</a>' : '') + '</nav>'; };
for (const c of SEQ) {
  let b = '<article><p class="crumb">Part ' + c.part + ' · ' + esc(PARTS[c.part - 1].title) + (c.ov ? ' · Overview' : ' · Chapter ' + c.num) + '</p><h1>' + esc(c.title) + '</h1><p class="lead">' + md(c.lead) + '</p>';
  if (c.five) b += '<section class="five"><h2>' + esc(c.fiveTitle || 'The whole Part in 5 lines') + '</h2><ol>' + c.five.map(x => '<li>' + md(x) + '</li>').join('') + '</ol></section>';
  if (c.ov && SH[c.part]) b += sheetText(SH[c.part]);
  if (c.goals) b += '<section class="goals"><h2>In this chapter you will learn</h2><ul>' + c.goals.map(x => '<li>' + md(x) + '</li>').join('') + '</ul></section>';
  const v = V[c.id];
  if (v) b += '<section><h2>Watch it explained</h2><ul><li>English: <a href="https://www.youtube.com/watch?v=' + v.en.id + '">' + esc(v.en.title) + '</a> by ' + esc(v.en.channel) + ' (about ' + v.en.mins + ' min)</li>' + (v.te ? '<li>Telugu: <a href="https://www.youtube.com/watch?v=' + v.te.id + '">' + esc(v.te.title) + '</a> by ' + esc(v.te.channel) + ' (about ' + v.te.mins + ' min)</li>' : '') + '</ul></section>';
  b += (c.body || []).map(block).join('\n');
  if (c.take) b += '<section class="take"><h2>Key takeaways</h2><ul>' + c.take.map(x => '<li>' + md(x) + '</li>').join('') + '</ul></section>';
  const EXL = !c.ov && ctx.D.EX[c.id];
  if (EXL) b += '<section class="quiz"><h2>Quick exercises</h2><p>Fill in each blank (<code>___</code>). The answers are hidden under each exercise.</p><ol>' + EXL.map(x => '<li><p>' + md(x.q) + '</p>' + code(x.c) + '<details><summary>Answer</summary><p>' + x.a.map(alts => '<code>' + esc(alts[0]) + '</code>').join(', ') + ' — ' + md(x.e) + '</p><p>Output:</p><pre class="out">' + esc(x.o) + '</pre></details></li>').join('') + '</ol></section>';
  if (c.quiz && c.quiz.length) b += '<section class="quiz"><h2>' + (c.ov ? 'Mixed quiz' : 'Chapter quiz') + '</h2><ol>' + c.quiz.map(q => '<li><p>' + md(q.q) + '</p>' + (q.c ? code(q.c) : '') + '<ol type="A">' + q.o.map(o => '<li>' + md(o) + '</li>').join('') + '</ol><details><summary>Answer</summary><p><b>' + md(q.o[q.a]) + '</b>. ' + md(q.e) + '</p></details></li>').join('') + '</ol></section>';
  if (c.cards && c.cards.length) b += '<section class="cards"><h2>Flashcards</h2><dl>' + c.cards.map(x => '<dt>' + md(x[0]) + '</dt><dd>' + md(x[1]) + (x[2] ? code(x[2]) : '') + '</dd>').join('') + '</dl></section>';
  if (c.cheat) b += '<section><h2>Cheat sheet</h2>' + table(['Code', 'What it does'], c.cheat.map(r => ['`' + r[0] + '`', r[1]])) + '</section>';
  if (!c.ov && ctx.D.BT[c.id]) b += '<p class="ver"><a href="test-' + c.id + '.html">Take the ' + c.num + '.1 Big Test</a>: ' + ctx.D.BT[c.id].length + ' questions on this chapter, with answers.</p>';
  if (c.ov && ctx.D.PJP[c.part]) b += '<p class="ver"><a href="projects-part' + c.part + '.html">Part ' + c.part + ' projects</a>: ' + ctx.D.PJP[c.part].ids.length + ' real data-analyst problems with briefs, hints, example runs and model answers.</p>';
  b += nav(c) + '</article>';
  fs.writeFileSync(path.join(out, c.id + '.html'), page(c.id, c.title, plain(c.lead), b));
  urls.push('learn/' + c.id + '.html');
  const BTL = !c.ov && ctx.D.BT[c.id];
  if (BTL) {
    const LV = { 1: 'Basic', 2: 'Medium', 3: 'Challenge' };
    const tb = '<article><h1>' + c.num + '.1 Big Test: ' + esc(c.nav || c.title) + '</h1><p class="lead">' + BTL.length + ' questions on ' + esc(c.title) + ' only, from basic to challenge. Try each one first, then open the answer. <a href="' + c.id + '.html">Back to the chapter</a>.</p><ol>' +
      BTL.map(x => (x.ty === 'fix' || x.ty === 'type') ? '<li><p><b>' + LV[x.lv] + '.</b> ' + md(x.q) + '</p>' + code(x.c) + (x.ty === 'fix' ? '<p>It should print:</p><pre class="out">' + esc(x.want) + '</pre>' : '') + '<details><summary>Answer</summary>' + (x.ty === 'fix' ? code(x.fixed, x.want) : '<pre class="out">' + esc(x.ans) + '</pre>') + '<p>' + md(x.e) + '</p></details></li>' : '<li><p><b>' + LV[x.lv] + '.</b> ' + md(x.q) + '</p>' + (x.c ? code(x.c) : '') +
        (x.ty === 'bug' ? '<p>It should print:</p><pre class="out">' + esc(x.want) + '</pre><p>Replace line ' + x.line + ' with:</p>' : '') +
        (x.ty === 'code' ? '<p>Your code should print exactly:</p><pre class="out">' + esc(x.out) + '</pre>' : '<ol type="A">' + x.o.map(o => '<li>' + md(o) + '</li>').join('') + '</ol>') +
        '<details><summary>Answer</summary>' + (x.ty === 'code' ? code(x.sol, x.out) : '<p><b>' + 'ABCD'.charAt(x.a) + '.</b> ' + md(x.o[x.a]) + '</p>') + '<p>' + md(x.e) + '</p></details></li>').join('') + '</ol></article>';
    fs.writeFileSync(path.join(out, 'test-' + c.id + '.html'), page('test-' + c.id, c.num + '.1 Big Test: ' + (c.nav || c.title), BTL.length + ' Python practice questions on ' + c.title + ', from basic to challenge, with answers.', tb));
    urls.push('learn/test-' + c.id + '.html');
  }
}
// Projects: one text page per Part (briefs, hints, example runs; the model answer is folded away)
const PJW = [['Correctness', 30, 'Share of the main tests your program passes'], ['Logic', 20, 'Share of the logic tests (tricky formulas and conditions)'], ['Edge cases', 10, 'Share of the edge-case tests (zeros, big numbers, spaces)'], ['Use of concepts', 25, 'Python reads your code and looks for the tools the project needs; 5 points off for each tool from a later Part'], ['Readability', 15, 'Clear names, your own comments, short lines, clean indentation, spaces around =']];
for (const [n, P] of Object.entries(ctx.D.PJP)) {
  const pt = PARTS[n - 1], ov = OV.filter(o => o.part === +n)[0];
  let b = '<article><p class="crumb">Part ' + n + ' · ' + esc(pt.title) + ' · Projects</p><h1>' + esc(P.title) + '</h1><p class="lead">' + md(P.intro) + '</p>' +
    '<p>In the <a href="../#projects-' + n + '">interactive version</a> you write each program in the browser, run it with your own numbers, and press <b>Submit</b> to get an automatic score out of 100 with feedback. A score of 70 or more means you are ready for the next project.</p>';
  for (const id of P.ids) {
    const x = ctx.D.PJ[id];
    b += '<section><h2>Project ' + n + '.' + x.n + ' (' + esc(x.levelName) + '): ' + esc(x.title) + '</h2><p><b>' + md(x.short) + '</b></p>' + x.story.split('\n').map(p => '<p>' + md(p) + '</p>').join('') +
      '<h3>What you will practise</h3><ul>' + x.objectives.map(o => '<li>' + md(o) + '</li>').join('') + '</ul>' +
      '<p><b>You may use:</b> ' + x.may.map(md).join(', ') + '.<br><b>Do not use yet:</b> ' + x.mustnot.map(md).join(', ') + '.</p>' +
      '<h3>Your tasks</h3><ol>' + x.tasks.map(t => '<li>' + md(t) + '</li>').join('') + '</ol>' +
      '<h3>Lines your output must contain</h3><pre class="out">' + esc(x.lines.join('\n')) + '</pre><p>' + md(x.rules) + '</p>' +
      '<h3>Example run</h3><p>Typed values: ' + x.example.inputs.map(v => '<code>' + esc(v) + '</code>').join(', ') + '.</p><pre class="out">' + esc(x.example.out) + '</pre>' +
      '<h3>Edge cases to think about</h3><ul>' + x.edge.map(t => '<li>' + md(t) + '</li>').join('') + '</ul>' +
      '<h3>How your score is worked out</h3>' + table(['Part', 'Points', 'How it is checked'], PJW.map(w => ['**' + w[0] + '**', String(w[1]), w[2]])) +
      '<h3>Hints</h3>' + x.hints.map((t, i) => '<details><summary>Hint ' + (i + 1) + '</summary><p>' + md(t) + '</p></details>').join('') +
      '<details><summary>Model answer (try it yourself first)</summary>' + code(x.sol) + '</details></section>';
  }
  b += '<nav class="pn">' + (ov ? '<a href="' + ov.id + '.html">← ' + esc(ov.nav) + '</a>' : '<span></span>') + '</nav></article>';
  fs.writeFileSync(path.join(out, 'projects-part' + n + '.html'), page('projects-part' + n, 'Part ' + n + ' Python projects for data analysts', P.ids.length + ' Python projects for beginner data analysts on Part ' + n + ' (' + pt.title + '), with briefs, hints, example runs and model answers.', b));
  urls.push('learn/projects-part' + n + '.html');
}
// Reference
fs.writeFileSync(path.join(out, 'reference.html'), page('reference', 'Python reference: string, list, tuple, set and dict methods and built-in functions', 'Every Python method for strings, lists, tuples, sets and dictionaries, plus the built-in functions, each with an example and its real output.',
  '<article><h1>Python reference</h1><p class="lead">Every method of strings, lists, tuples, sets, dictionaries and files, every built-in function, every keyword and the built-in exceptions. Each example was run in real Python.</p>' +
  REF.map(x => '<section><h2 id="' + x.id + '">' + esc(x.title) + '</h2><p>' + md(x.intro) + '</p>' + '<div class="tbl"><table><thead><tr><th>Method</th><th>What it does</th><th>Example</th><th>Output</th></tr></thead><tbody>' + x.rows.map(r => '<tr><th scope="row"><code>' + esc(r.m) + '</code></th><td>' + md(r.d) + '</td>' + (r.c ? '<td><pre><code>' + esc(r.c) + '</code></pre></td><td><pre class="out">' + esc(r.o) + '</pre></td>' : '<td colspan="2">' + md(r.n || '') + '</td>') + '</tr>').join('') + '</tbody></table></div></section>').join('') + '</article>'));
urls.push('learn/reference.html');
// Glossary
const seen = {}, G = [];
OV.forEach(o => (o.body || []).forEach(b => { if (b.t === 'defs') b.items.forEach(d => { const k = d.t.toLowerCase(); if (!seen[k]) { seen[k] = 1; G.push(Object.assign({ part: o.part }, d)); } }); }));
G.sort((a, b) => a.t.replace(/^[^A-Za-z]+/, '').toLowerCase().localeCompare(b.t.replace(/^[^A-Za-z]+/, '').toLowerCase()));
fs.writeFileSync(path.join(out, 'glossary.html'), page('glossary', 'Python glossary for beginners', 'Every key Python word for beginners, explained in plain English with a tiny example.',
  '<article><h1>Python glossary</h1><p class="lead">' + G.length + ' key words, A to Z, each with a tiny example.</p><dl class="defs">' + G.map(d => '<dt>' + md(d.t) + '</dt><dd><p>' + md(d.d) + '</p>' + (d.c ? code(d.c, d.o, d.err) : '') + (d.go ? '<p class="cap">From <a href="' + d.go + '.html">' + esc((CH.find(c => c.id === d.go) || {}).title || 'the chapter') + '</a></p>' : '') + '</dd>').join('') + '</dl></article>'));
urls.push('learn/glossary.html');
// Cheat sheet
fs.writeFileSync(path.join(out, 'cheatsheet.html'), page('cheatsheet', 'Python cheat sheet for data analysts', 'The key Python commands from every chapter on one page.',
  '<article><h1>Python cheat sheet</h1>' + CH.map(c => c.cheat ? '<section><h2>' + c.num + '. ' + esc(c.title) + '</h2>' + table(['Code', 'What it does'], c.cheat.map(r => ['`' + r[0] + '`', r[1]])) + '</section>' : '').join('') + '</article>'));
urls.push('learn/cheatsheet.html');
// Course index
const outline = PARTS.map(p => '<section><h2>Part ' + p.n + ': ' + esc(p.title) + '</h2><p>' + esc(p.sub || '') + '</p><ol>' + SEQ.filter(c => c.part === p.n).map(c => '<li><a href="' + c.id + '.html">' + esc(c.ov ? c.nav : c.num + '. ' + c.title) + '</a> – ' + md(c.lead) + '</li>').join('') + (ctx.D.PJP[p.n] ? '<li><a href="projects-part' + p.n + '.html">Part ' + p.n + ' projects</a> – ' + ctx.D.PJP[p.n].ids.length + ' real data-analyst problems with an automatic score out of 100.</li>' : '') + '</ol></section>').join('');
const NTE = Object.values(V).filter(v => v.te).length;
const FEATURES = [CH.length + ' chapters in plain, simple English, from your first <code>print()</code> to NumPy, in 8 Parts', 'A <b>real Python runner in the browser</b> (Python 3.12 with NumPy) under every practice task, with a <b>Check my answer</b> button, and a <b>Try it</b> button on every code example', 'Animated explainers that run code line by line, slide decks, mind maps and a revision poster for every chapter', 'A short video by a real teacher for every chapter (English, plus Telugu for ' + NTE + ' chapters)', 'Practice on a realistic, messy hotel bookings dataset, plus an end-to-end mini project', 'An overview page for every Part with key definitions, big comparison tables, "don\'t mix these up" tables and a picture cheat sheet', Object.values(ctx.D.EX).reduce((n, L) => n + L.length, 0) + ' quick fill-in-the-blank exercises (5 per chapter) with instant checking', 'Quizzes, a final exam, flashcards with spaced repetition, a cheat sheet, a glossary and a full Python reference', 'Works on phones, has dark mode, works offline after the first visit, no ads and no sign-up'];
fs.writeFileSync(path.join(out, 'index.html'), page('index', 'Learn Python for data analysis, step by step', 'A free, interactive Python course for aspiring data analysts: ' + CH.length + ' chapters, a real Python runner in the browser, videos, quizzes, flashcards and a full reference.',
  '<article><h1>Python Study Hub: learn Python for data analysis</h1><p class="lead">A free course for aspiring data analysts, from basics to NumPy. <a href="../">Open the interactive course ▶</a></p><h2>What you get</h2><ul>' + FEATURES.map(f => '<li>' + f + '</li>').join('') + '</ul>' + outline + '</article>',
  '<script type="application/ld+json">' + JSON.stringify({ '@context': 'https://schema.org', '@type': 'Course', name: 'Python Study Hub: Python for data analysis', description: 'Free interactive Python course for aspiring data analysts, from basics to NumPy, with a browser Python runner, videos, quizzes and flashcards.', provider: { '@type': 'Person', name: 'Srinath Raju Putta' }, url: BASE, isAccessibleForFree: true, inLanguage: 'en' }) + '</script>\n'));
urls.unshift('learn/index.html');
fs.copyFileSync('learn.css', path.join(out, 'learn.css'));
fs.writeFileSync(path.join('site', 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + ['', ...urls].map(u => '  <url><loc>' + BASE + u + '</loc></url>').join('\n') + '\n</urlset>\n');
// Home fallback for the interactive page: shown to tools that do not run JavaScript, replaced as soon as the app starts
const fallback = '<div class="nojs"><h1>Python Study Hub: learn Python for data analysis</h1><p>A free, interactive course for aspiring data analysts, from your first <code>print()</code> to NumPy.</p><ul>' + FEATURES.map(f => '<li>' + f + '</li>').join('') + '</ul><p><a href="learn/index.html">Read every chapter as plain text</a> · <a href="learn/reference.html">Python reference</a> · <a href="learn/glossary.html">Glossary</a></p>' + PARTS.map(p => '<h2>Part ' + p.n + ': ' + esc(p.title) + '</h2><ul>' + SEQ.filter(c => c.part === p.n).map(c => '<li><a href="learn/' + c.id + '.html">' + esc(c.ov ? c.nav : c.num + '. ' + c.title) + '</a></li>').join('') + '</ul>').join('') + '</div>';
fs.writeFileSync(path.join('out', 'nojs_home.html'), fallback);
console.log('pages', urls.length, 'sitemap urls', urls.length + 1, 'fallback KB', Math.round(fallback.length / 1024));
