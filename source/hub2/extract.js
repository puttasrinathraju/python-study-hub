const fs = require('fs'), vm = require('vm'), path = require('path');
const ctx = { console };
vm.createContext(ctx);
for (const f of ['viz.js', 'viz2.js', 'art.js', 'parts.js', ...fs.readdirSync('ch').sort().map(x => 'ch/' + x), 'decks.js', 'realdata.js', ...fs.readdirSync('.').filter(x => /^posters_.*\.js$/.test(x)).sort(), ...fs.readdirSync('.').filter(x => /^ov_.*\.js$/.test(x)).sort(), 'mixed.js']) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
vm.runInContext(fs.readFileSync('reference.js', 'utf8'), ctx, { filename: 'reference.js' });
vm.runInContext('this.__CH = CHAPTERS.concat(OVERVIEWS.map(function(o){ return Object.assign({ id: "overview" + o.part }, o); })); this.__P = POSTERS; this.__NOV = OVERVIEWS.length', ctx);
const trim = s => String(s).replace(/^\n+/, '').replace(/\s+$/, '');
const strip = s => String(s).replace(/^`|`$/g, '');
const items = [];
const add = (id, c, o, err, nr, pre) => { if (nr) return; if (o == null) return; items.push({ id, code: (pre ? trim(pre) + '\n' : '') + trim(c), out: trim(o), err: !!err }); };
const stats = { chapters: 0, quiz: 0, cards: 0, anim: 0, deck: 0, mm: 0, pred: 0, code: 0 };
for (const ch of ctx.__CH) {
  stats.chapters++; stats.quiz += (ch.quiz || []).length; stats.cards += (ch.cards || []).length;
  (ch.body || []).forEach((b, i) => {
    const id = ch.id + '#' + i + ':' + b.t;
    if (b.t === 'code') { stats.code++; add(id, b.c, b.o, b.err, b.nr, b.pre); }
    if (b.t === 'note' && b.c) add(id, b.c, b.o, b.err, b.nr, b.pre);
    if (b.t === 'cmp') { ['l', 'r'].forEach(k => { const s = b[k]; if (s.c) add(id + k, s.c, s.o, s.err, s.nr, s.pre); }); }
    if (b.t === 'prac') b.items.forEach((t, j) => { if (t.sol) add(id + '.' + j, t.sol, t.out, false, t.nr, t.pre); });
    if (b.t === 'deck') { stats.deck++; b.s.forEach((s, j) => { if (s.c) add(id + '.s' + j, s.c, s.o, s.err, s.nr, s.pre); }); }
    if (b.t === 'anim') stats.anim++;
    if (b.t === 'mm') stats.mm++;
    if (b.t === 'defs') b.items.forEach((d, j) => { if (d.c) add(id + '.d' + j, d.c, d.o, d.err, d.nr, d.pre); });
    if (b.t === 'vs' && b.c) add(id + '.vs', b.c, b.o, b.err, b.nr, b.pre);
    if (b.t === 'pred') { stats.pred++; if (b.chk) add(id + '.pred', b.c, strip(b.o[b.a]), b.err, b.nr, b.pre); }
  });
  (ch.quiz || []).forEach((q, j) => { if (q.c && q.chk) add(ch.id + ':quiz' + j, q.c, strip(q.o[q.a]), q.err, q.nr, q.pre); });
}
let pc = 0;
for (const [pid, p] of Object.entries(ctx.__P)) { p.mods.forEach((m, mi) => m.cards.forEach((cd, ci) => { if (cd.c && cd.o != null) { pc++; add('poster:' + pid + ':' + mi + ':' + ci, cd.c, cd.o, false, false, null); } })); }
stats.posters = Object.keys(ctx.__P).length; stats.overviews = ctx.__NOV; stats.posterCode = pc;
vm.runInContext(fs.readFileSync('exercises.js', 'utf8'), ctx, { filename: 'exercises.js' }); vm.runInContext('this.__X = EXERCISES', ctx); let nEx = 0; for (const [cid, L] of Object.entries(ctx.__X)) L.forEach((x, i) => { let k = 0; add('ex:' + cid + ':' + i, x.c.replace(/___/g, () => x.a[k++][0]), x.o, false, false, null); nEx++; }); stats.exercises = nEx;
vm.runInContext(fs.readFileSync('bigtests.js', 'utf8'), ctx, { filename: 'bigtests.js' }); vm.runInContext('this.__BT = BIGTESTS', ctx); let nBT = 0; const tk = s => s.replace(/^`|`$/g, '');
for (const [cid, L] of Object.entries(ctx.__BT)) L.forEach((x, i) => { const id = 'bt:' + cid + ':' + i; nBT++;
  if (x.ty === 'out') add(id, x.c, tk(x.o[x.a]), false, false, null);
  else if (x.ty === 'bug') add(id, x.fixed, x.want, false, false, null);
  else if (x.ty === 'code') add(id, x.sol, x.out, false, false, null);
  else if (x.ty === 'fix') add(id, x.fixed, x.want, false, false, null);
  else if (x.ty === 'type') add(id, x.c, x.ans, false, false, null);
  else if (x.v) add(id, x.v, 'True', false, false, null); });
stats.bigtests = nBT;
if (fs.existsSync('out/pj_items.json')) { const pj = JSON.parse(fs.readFileSync('out/pj_items.json', 'utf8')); pj.forEach(x => add(x.id, x.code, x.out, false, false, null)); stats.projectRuns = pj.length; }
vm.runInContext('this.__R = REFERENCE', ctx); for (const x of ctx.__R) x.rows.forEach((r, i) => r.c && add('ref:' + x.id + ':' + i, r.c, r.o, false, false, null));
fs.writeFileSync('out/items.json', JSON.stringify(items));
console.log(JSON.stringify(stats), 'runnable', items.length);
