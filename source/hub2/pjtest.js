// Part 1: the 4 new Big Tests answered correctly (25/25), the 3 projects (model answer 100, weak answer lower),
// hints, model answer, My Projects, timeouts/input errors, phone width and dark mode.
const { chromium } = require('playwright');
const U = 'http://localhost:8765/?localpy';
const SH = '/tmp/claude-0/-home-claude/b46aad29-a5de-5000-8c73-b3a2a24cbd55/scratchpad/shots/';
const WEAK = require('./out/pj_weak.json');
const only = process.argv[2] || 'all';
(async () => {
  const b = await chromium.launch(); const errs = []; const R = {};
  const c = await b.newContext({ viewport: { width: 1280, height: 900 } }); const p = await c.newPage();
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push('console ' + m.text()); });
  await p.goto(U + '#home'); await p.waitForTimeout(600);
  R.sideBT = await p.locator('.chlink.btl:not(.pjl)').allTextContents();
  R.sidePJ = await p.locator('.chlink.pjl').allTextContents();
  R.nav = await p.locator('#navtools button').allTextContents();
  if (only === 'all' || only === 'bt') {
    for (const cid of ['intro', 'variables', 'output', 'operators']) {
      await p.goto(U + '#test-' + cid); await p.waitForTimeout(500);
      const L = await p.evaluate(id => BIGTESTS[id], cid);
      for (let i = 0; i < L.length; i++) { const x = L[i], q = p.locator('#btq-' + i); if (x.ty === 'code') await q.locator('.edta').fill(x.sol); else if (x.ty === 'fix') await q.locator('.edta').fill(x.fixed); else await q.locator('.btin').fill(x.ans); }
      await p.locator('#btFin').click(); await p.locator('.btsum').waitFor({ timeout: 240000 });
      R['bt_' + cid] = (await p.locator('.btsum .btbig').textContent()).replace(/\s+/g, ' ');
      if (cid === 'intro') { R.cta1 = await p.goto(U + '#intro').then(() => p.waitForTimeout(400)).then(() => p.locator('.btcta').textContent()); }
    }
    // one wrong answer saves weak topics for My Projects
    await p.goto(U + '#test-operators'); await p.waitForTimeout(400); await p.locator('#btAgain').count();
  }
  if (only === 'all' || only === 'pj') {
    await p.goto(U + '#projects-1'); await p.waitForTimeout(500);
    R.partH1 = await p.locator('h1').textContent(); R.cards = await p.locator('.pjcard h3').allTextContents(); R.top = await p.locator('#topTitle').textContent();
    await p.screenshot({ path: SH + 'pj_part1.png', fullPage: false });
    for (const id of ['p1-1', 'p1-2', 'p1-3']) {
      await p.goto(U + '#project-' + id); await p.waitForTimeout(500);
      const P = await p.evaluate(i => PROJECTS[i], id);
      const r = R[id] = {};
      r.top = await p.locator('#topTitle').textContent();
      r.model0 = await p.locator('#pjModel details').count();
      // hints one at a time
      r.hints0 = await p.locator('.pjhint').count(); await p.locator('#pjHintB').click(); r.hints1 = await p.locator('.pjhint').count(); r.btn = await p.locator('#pjHintB').textContent();
      // weak answer first
      await p.locator('#pjEd .edta').fill(WEAK[id].code); await p.locator('#pjSub').click();
      await p.locator('#pjRes .btsum').waitFor({ timeout: 240000 });
      r.weak = (await p.locator('#pjRes .btbig').textContent()).replace(/\s+/g, ' ');
      r.weakParts = (await p.locator('.pjbar').allTextContents()).map(s => s.replace(/\s+/g, ' ').trim());
      r.weakGood = await p.locator('.pjgood li').allTextContents(); r.weakTodo = await p.locator('.pjtodo li').allTextContents();
      r.weakRows = await p.locator('.pjtests tbody tr .pjr').allTextContents();
      r.model1 = await p.locator('#pjModel details').count();
      if (id === 'p1-1') { await p.locator('#pjRes').screenshot({ path: SH + 'pj_weak_result.png' }); }
      // model answer
      await p.locator('#pjEd .edta').fill(P.sol); await p.locator('#pjSub').click();
      await p.waitForFunction(() => document.querySelector('#pjRes .btsum') && document.querySelector('#pjMsg').textContent === '', null, { timeout: 240000 });
      r.model = (await p.locator('#pjRes .btbig').textContent()).replace(/\s+/g, ' ');
      r.modelMsg = (await p.locator('#pjRes .btmsg > b').textContent());
      r.modelTodo = await p.locator('.pjtodo').textContent();
      r.next = await p.locator('#pjRes .btsum .btn.pri').allTextContents();
      if (id === 'p1-2') await p.locator('#pjRes .btsum').screenshot({ path: SH + 'pj_pass.png' });
    }
    // edge behaviours on project 1: asks for too many inputs, endless loop only for the first test, a later-Part tool, syntax error
    await p.goto(U + '#project-p1-1'); await p.waitForTimeout(400);
    const P1 = await p.evaluate(() => PROJECTS['p1-1']);
    await p.locator('#pjEd .edta').fill('first = input("a")\nwhile first == "40":\n    pass\n' + P1.sol.replace('mango_units = int(input("Mango juice units sold: "))', 'mango_units = int(first)') + '\nextra = input("one more: ")');
    await p.locator('#pjSub').click();
    await p.waitForFunction(() => document.querySelector('#pjRes .btsum') && document.querySelector('#pjMsg').textContent === '', null, { timeout: 300000 });
    R.special = { score: (await p.locator('#pjRes .btbig').textContent()).replace(/\s+/g, ' '), rows: await p.locator('.pjtests tbody tr .pjr').allTextContents(), todo: await p.locator('.pjtodo li').allTextContents() };
    await p.locator('#pjEd .edta').fill('print("hi"'); await p.locator('#pjSub').click();
    await p.waitForFunction(() => document.querySelector('#pjRes .btsum') && document.querySelector('#pjMsg').textContent === '', null, { timeout: 240000 });
    R.syntax = { score: (await p.locator('#pjRes .btbig').textContent()).replace(/\s+/g, ' '), todo: (await p.locator('.pjtodo li').allTextContents()).slice(0, 3) };
    R.store = JSON.parse(await p.evaluate(() => localStorage.getItem('pyhub:pj')));
    await p.goto(U + '#myprojects'); await p.waitForTimeout(500);
    R.my = { h1: await p.locator('h1').textContent(), rows: (await p.locator('tbody tr').allTextContents()).map(s => s.replace(/\s+/g, ' ').trim()), strong: await p.locator('.pjgood .pill').allTextContents(), work: (await p.locator('.pjwork .btn').allTextContents()).slice(0, 8) };
    await p.screenshot({ path: SH + 'pj_my.png', fullPage: true });
    R.sideDots = await p.locator('.chlink.pjl .dot').allTextContents();
    await p.goto(U + '#overview1'); await p.waitForTimeout(500); R.ovCTA = await p.locator('.btcta').textContent();
    await p.goto(U + '#projects-part1'); await p.waitForTimeout(300); R.alias = await p.locator('h1').textContent();
  }
  // phone + dark
  const m = await b.newContext({ viewport: { width: 390, height: 844 }, colorScheme: 'dark' }); const mp = await m.newPage(); mp.on('pageerror', e => errs.push('m ' + e.message));
  const st = await p.evaluate(() => { const o = {}; for (let k = 0; k < localStorage.length; k++) { const key = localStorage.key(k); o[key] = localStorage.getItem(key); } return o; });
  await mp.goto(U + '#home'); await mp.evaluate(o => { for (const k in o) localStorage.setItem(k, o[k]); }, st);
  for (const r of ['#project-p1-1', '#projects-1', '#myprojects', '#test-intro', '#test-output', '#overview1']) { await mp.goto(U + r); await mp.waitForTimeout(600); R['w' + r] = await mp.evaluate(() => document.documentElement.scrollWidth); }
  await mp.goto(U + '#project-p1-2'); await mp.waitForTimeout(600);
  await mp.locator('#pjEd .edta').fill(WEAK['p1-2'].code); await mp.locator('#pjSub').click();
  await mp.waitForFunction(() => document.querySelector('#pjRes .btsum') && document.querySelector('#pjMsg').textContent === '', null, { timeout: 240000 });
  R.phoneAfterSubmit = await mp.evaluate(() => document.documentElement.scrollWidth);
  R.phoneGood = await mp.locator('.pjgood li').allTextContents();
  await mp.screenshot({ path: SH + 'pj_phone_full.png', fullPage: true });
  R.errs = errs; console.log(JSON.stringify(R, null, 1)); await b.close();
})();
