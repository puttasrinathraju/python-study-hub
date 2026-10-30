const { chromium } = require('playwright');
const U = 'http://localhost:8765/index.html?localpy';
const SH = '/tmp/claude-0/-home-claude/b46aad29-a5de-5000-8c73-b3a2a24cbd55/scratchpad/shots/';
(async () => {
  const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 1280, height: 900 } }); const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push('pageerror ' + e.message)); p.on('console', m => { if (m.type() === 'error') errs.push('console ' + m.text()); });
  const R = {};
  await p.goto(U + '#numpy3'); await p.waitForTimeout(800);
  R.title = await p.locator('h1').first().textContent();
  R.top = await p.locator('#topTitle').textContent();
  R.anims = await p.locator('.player').count(); R.decks = await p.locator('.deck').count();
  R.hists = await p.locator('svg[aria-label*="istogram"]').count();
  R.video = await p.locator('.vbox, .vmount').count();
  R.ex = await p.locator('.exq').count();
  R.chips = await p.locator('#toc button').allTextContents();
  // exercise: wrong, then right
  const e1 = p.locator('.exq').nth(0);
  await e1.locator('.exin').fill('split'); await e1.locator('.exck').click(); R.wrong = (await e1.locator('.exfb').textContent()).slice(0, 60);
  await e1.locator('.exin').fill('  array_split '); await e1.locator('.exin').press('Enter'); R.right = (await e1.locator('.exfb').textContent()).slice(0, 80);
  R.stored = await p.evaluate(() => localStorage.getItem('pyhub:ex'));
  const e3 = p.locator('.exq').nth(2); await e3.locator('.exin').fill('Seed'); await e3.locator('.exck').click(); R.caseHint = (await e3.locator('.exfb').textContent()).slice(0, 70);
  const e2 = p.locator('.exq').nth(1); await e2.locator('.exsh').click(); R.shown = (await e2.locator('.exfb').textContent()).slice(0, 50); R.shownVal = await e2.locator('.exin').inputValue();
  await p.locator('.exq').nth(0).screenshot({ path: SH + 'ex_desktop.png' });
  // deck with histogram
  await p.locator('details.xtra:has(.deck) > summary').first().click(); const dk = p.locator('.deck').first(); await dk.scrollIntoViewIfNeeded(); await dk.locator('.nx').click(); await p.waitForTimeout(200); await dk.screenshot({ path: SH + 'deck_normal.png' });
  await p.locator('.player').first().screenshot({ path: SH + 'anim_split.png' });
  // multi-blank exercise in another chapter + quotes
  await p.goto(U + '#conditions'); await p.waitForTimeout(500);
  const c4 = p.locator('.exq').nth(3); const ins = c4.locator('.exin'); await ins.nth(0).fill('if'); await ins.nth(1).fill('else'); await c4.locator('.exck').click(); R.twoBlank = (await c4.locator('.exfb').textContent()).slice(0, 30);
  await p.goto(U + '#dicts'); await p.waitForTimeout(500);
  const d1 = p.locator('.exq').nth(0); await d1.locator('.exin').fill("'city'"); await d1.locator('.exck').click(); R.quotes = (await d1.locator('.exfb').textContent()).slice(0, 30);
  // exercises page
  await p.goto(U + '#exercises'); await p.waitForTimeout(500);
  R.exPageH1 = await p.locator('h1').textContent(); R.exGroups = await p.locator('details.exch').count(); R.exProg = await p.locator('.exprog b').textContent();
  await p.locator('details.exch summary').first().click(); await p.waitForTimeout(200); R.exOpened = await p.locator('details.exch[open] .exq').count();
  R.nav = await p.locator('#navtools button').allTextContents();
  // reference
  await p.goto(U + '#reference'); await p.waitForTimeout(500);
  R.refRows = await p.locator('.reft tbody tr').count(); R.refNotes = await p.locator('.refn').count();
  R.refToc = await p.locator('#rtoc button').allTextContents();
  await p.fill('#rq', 'readline'); R.refSearch = await p.locator('.reft tbody tr').count();
  await p.locator('.reftb').first().click(); await p.locator('.reftry .rrun').click();
  await p.locator('.reftry .rtext').filter({ hasText: /\S/ }).waitFor({ timeout: 90000 }); R.refFileRun = (await p.locator('.reftry .rtext').textContent()).trim();
  await p.fill('#rq', 'KeyError'); R.refKeyError = await p.locator('.reft tbody tr').count();
  // overview 7 and home
  await p.goto(U + '#overview7'); await p.waitForTimeout(600); R.ov7vs = await p.locator('.vs, table').count(); R.ov7mm = await p.locator('.mm').count();
  await p.goto(U + '#home'); await p.waitForTimeout(500); R.homeEx = await p.locator('.tool[data-go="exercises"]').textContent();
  // Try it on a numpy3 example in browser Python
  await p.goto(U + '#numpy3'); await p.waitForTimeout(600);
  const tc = p.locator('.trycell').nth(3); await tc.click(); await p.locator('.trybox .rrun').first().click();
  await p.locator('.trybox .rtext').first().filter({ hasText: /\S/ }).waitFor({ timeout: 120000 }); R.tryNumpy = (await p.locator('.trybox .rtext').first().textContent()).trim().slice(0, 80);
  // phone, light and dark
  const m = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 }); const mp = await m.newPage(); mp.on('pageerror', e => errs.push('m ' + e.message));
  for (const [route, name] of [['#numpy3', 'm_numpy3'], ['#exercises', 'm_exercises'], ['#reference', 'm_reference']]) {
    await mp.goto(U + route); await mp.waitForTimeout(700);
    R['wide_' + name] = await mp.evaluate(() => document.documentElement.scrollWidth);
  }
  await mp.goto(U + '#numpy3'); await mp.waitForTimeout(700); await mp.locator('.exq').nth(0).scrollIntoViewIfNeeded(); await mp.locator('.exq').nth(0).screenshot({ path: SH + 'ex_phone.png' });
  const dm = await b.newContext({ viewport: { width: 1100, height: 900 }, colorScheme: 'dark' }); const dp = await dm.newPage();
  await dp.goto(U + '#numpy3'); await dp.waitForTimeout(700); await dp.locator('details.xtra:has(.deck) > summary').first().click(); const dd = dp.locator('.deck').first(); await dd.scrollIntoViewIfNeeded(); await dd.locator('.nx').click(); await dd.locator('.nx').click(); await dd.locator('.nx').click(); await dp.waitForTimeout(200); await dd.screenshot({ path: SH + 'deck_dark.png' });
  await dp.goto(U + '#exercises'); await dp.waitForTimeout(500); await dp.locator('details.exch summary').nth(2).click(); await dp.waitForTimeout(200); await dp.screenshot({ path: SH + 'exercises_dark.png' });
  await dp.goto(U + '#reference'); await dp.waitForTimeout(500); await dp.fill('#rq', 'Error'); await dp.waitForTimeout(200); await dp.screenshot({ path: SH + 'ref_dark.png' });
  R.errs = errs;
  console.log(JSON.stringify(R, null, 1));
  await b.close();
})();
