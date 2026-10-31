// node parttest.js <part>: every Big Test of the Part answered correctly (expect 25/25), each project's weak answer
// (expect a lower score) and model answer (expect 100/100), My Projects, phone width and dark mode. Needs the local server.
const { chromium } = require('playwright');
const U = 'http://localhost:8765/?localpy';
const SH = require('path').join(__dirname, '..', 'shots') + '/';
const WEAK = require('./out/pj_weak.json');
const N = +process.argv[2], skipBT = process.argv[3] === 'nobt';
(async () => {
  const b = await chromium.launch(); const errs = []; const R = { bt: {}, pj: {} };
  const c = await b.newContext({ viewport: { width: 1280, height: 900 } }); const p = await c.newPage();
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error' && !/ERR_TUNNEL|ERR_NAME|ERR_INTERNET/.test(m.text())) errs.push('console ' + m.text()); });
  await p.goto(U + '#home'); await p.waitForTimeout(500);
  const cids = await p.evaluate(n => CHAPTERS.filter(c => c.part === n && BIGTESTS[c.id]).map(c => c.id), N);
  R.side = await p.locator('.part[data-part="' + N + '"] .btb').allTextContents();
  if (!skipBT) for (const cid of cids) {
    await p.goto(U + '#test-' + cid); await p.waitForTimeout(500);
    const L = await p.evaluate(id => BIGTESTS[id], cid);
    for (let i = 0; i < L.length; i++) { const x = L[i], q = p.locator('#btq-' + i); if (x.ty === 'code') await q.locator('.edta').fill(x.sol); else if (x.ty === 'fix') await q.locator('.edta').fill(x.fixed); else await q.locator('.btin').fill(x.ans); }
    await p.locator('#btFin').click(); await p.locator('.btsum').waitFor({ timeout: 300000 });
    R.bt[cid] = (await p.locator('.btsum .btbig').textContent()).replace(/\s+/g, ' ');
    if (!/^25\/ 25/.test(R.bt[cid])) R.bt[cid] += ' WRONG: ' + (await p.locator('.btq.no .btqh .btn-n').allTextContents()).join(',');
  }
  const ids = await p.evaluate(n => PJ_PARTS[n].ids, N);
  for (const id of ids) {
    await p.goto(U + '#project-' + id); await p.waitForTimeout(500);
    const P = await p.evaluate(i => PROJECTS[i], id), r = R.pj[id] = {};
    await p.locator('#pjHintB').click(); r.hint = await p.locator('#pjHintB').textContent();
    for (const [k, code] of [['weak', WEAK[id].code], ['model', P.sol]]) {
      await p.locator('#pjEd .edta').fill(code); await p.locator('#pjSub').click();
      await p.waitForFunction(() => document.querySelector('#pjRes .btsum') && document.querySelector('#pjMsg').textContent === '', null, { timeout: 300000 });
      r[k] = (await p.locator('#pjRes .btbig').textContent()).replace(/\s+/g, ' ') + ' | ' + (await p.locator('.pjbar').allTextContents()).map(s => s.replace(/\s+/g, ' ').replace(/ tests| checks| tools/g, '').trim()).join(' ; ');
      if (k === 'weak') r.todo = (await p.locator('.pjtodo li').allTextContents()).map(s => s.slice(0, 150));
    }
    r.ready = await p.locator('#pjRes .btmsg > b').textContent();
  }
  await p.goto(U + '#projects-' + N); await p.waitForTimeout(400); R.cards = await p.locator('.pjcard .pill').allTextContents();
  await p.goto(U + '#myprojects'); await p.waitForTimeout(400); R.myRows = await p.locator('tbody tr').count();
  const m = await b.newContext({ viewport: { width: 390, height: 844 }, colorScheme: 'dark' }); const mp = await m.newPage(); mp.on('pageerror', e => errs.push('m ' + e.message));
  R.wide = {};
  for (const r of ['#project-' + ids[0], '#project-' + ids[2], '#projects-' + N, ...cids.map(x => '#test-' + x)]) { await mp.goto(U + r); await mp.waitForTimeout(500); R.wide[r] = await mp.evaluate(() => document.documentElement.scrollWidth); }
  await mp.goto(U + '#project-' + ids[1]); await mp.waitForTimeout(500); await mp.screenshot({ path: SH + 'part' + N + '_phone.png' });
  R.errs = errs; console.log(JSON.stringify(R, null, 1)); await b.close();
})();
