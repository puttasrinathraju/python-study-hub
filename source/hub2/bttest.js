const { chromium } = require('playwright');
const U = 'http://localhost:8765/?localpy';
const SH = '/tmp/claude-0/-home-claude/b46aad29-a5de-5000-8c73-b3a2a24cbd55/scratchpad/shots/';
(async () => {
  const b = await chromium.launch(); const errs = []; const R = {};
  const c = await b.newContext({ viewport: { width: 1280, height: 900 } }); const p = await c.newPage(); p.on('pageerror', e => errs.push(e.message));
  await p.goto(U + '#strings'); await p.waitForTimeout(800);
  R.sideLink = await p.locator('.chlink.btl').allTextContents(); R.cta = await p.locator('.btcta').count();
  await p.locator('.btcta').screenshot({ path: SH + 'bt_cta.png' });
  await p.locator('.chlink.btl').first().click(); await p.waitForTimeout(800);
  R.h1 = await p.locator('h1').textContent(); R.top = await p.locator('#topTitle').textContent(); R.qs = await p.locator('.btq').count(); R.count0 = await p.locator('#btCount').textContent();
  await p.screenshot({ path: SH + 'bt_top.png' });
  const L = await p.evaluate(() => BIGTESTS.strings);
  // first try: answer all right except Q1 and Q12, leave one code empty
  for (let i = 0; i < L.length; i++) {
    const x = L[i], q = p.locator('#btq-' + i);
    if (i === 1) continue;
    if (x.ty === 'code') await q.locator('.edta').fill(x.sol);
    else if (x.ty === 'fix') await q.locator('.edta').fill(i === 6 ? 'name = "Asha"\nprint(name[2])' : x.fixed);
    else await q.locator('.btin').fill(i === 0 ? 'hello HELLO' : x.ans);
  }
  R.count1 = await p.locator('#btCount').textContent();
  await p.locator('#btFin').click(); R.warn = await p.locator('#btCount').textContent();
  await p.locator('#btFin').click(); await p.locator('.btsum').waitFor({ timeout: 180000 });
  R.sum = (await p.locator('.btsum').textContent()).replace(/\s+/g, ' ').slice(0, 220);
  R.topics = await p.locator('.bttop .btn').allTextContents();
  await p.locator('.btsum').screenshot({ path: SH + 'bt_sum.png' });
  await p.locator('#btq-6').screenshot({ path: SH + 'bt_fix_wrong.png' });
  await p.locator('#btq-0').screenshot({ path: SH + 'bt_type_wrong.png' });
  R.saved = await p.evaluate(() => localStorage.getItem('pyhub:bt'));
  R.sideDot = await p.locator('.chlink.btl .dot').first().textContent();
  // second try: all right
  await p.locator('#btAgain').click(); await p.waitForTimeout(800);
  for (let i = 0; i < L.length; i++) { const x = L[i], q = p.locator('#btq-' + i); if (x.ty === 'code') await q.locator('.edta').fill(x.sol); else if (x.ty === 'fix') await q.locator('.edta').fill(x.fixed); else await q.locator('.btin').fill('  ' + x.ans + ' '); }
  await p.locator('#btFin').click(); await p.locator('.btsum').waitFor({ timeout: 180000 });
  R.sum2 = (await p.locator('.btsum .btbig').textContent()).replace(/\s+/g, ' '); R.sideDot2 = await p.locator('.chlink.btl .dot').first().textContent();
  await p.locator('.btsum').screenshot({ path: SH + 'bt_pass.png' });
  // topic link jumps to the chapter section
  await p.locator('#btAgain').click(); await p.waitForTimeout(500);
  // phone + dark
  const m = await b.newContext({ viewport: { width: 390, height: 844 }, colorScheme: 'dark' }); const mp = await m.newPage(); mp.on('pageerror', e => errs.push('m ' + e.message));
  await mp.goto('http://localhost:8765/#test-strings'); await mp.waitForTimeout(800); R.phoneWidth = await mp.evaluate(() => document.documentElement.scrollWidth);
  await mp.locator('#btq-6').scrollIntoViewIfNeeded(); await mp.locator('#btq-6').screenshot({ path: SH + 'bt_phone_fix.png' });
  R.errs = errs; console.log(JSON.stringify(R, null, 1)); await b.close();
})();
