const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, acceptDownloads: true });
  const page = await ctx.newPage();
  const errs = []; page.on('pageerror', e => errs.push(e.message));
  const R = {};
  // 1. check my answer + real data file in the runner (local Python)
  await page.goto('http://localhost:8765/index.html?localpy#files');
  await page.waitForTimeout(500);
  const tasks = page.locator('.task:has(.rchkb)');
  R.checkButtons = await tasks.count();
  const t = page.locator('.task', { hasText: 'Open `hotel_bookings.csv`' }).first().or(page.locator('.task', { hasText: 'hotel_bookings.csv' }).first());
  const box = page.locator('.task', { hasText: 'how many rows it has' }).first();
  await box.locator('.edta').fill('import csv\nwith open("hotel_bookings.csv", encoding="utf-8") as f:\n    rows = list(csv.DictReader(f))\nprint(len(rows), "rows")\nprint(list(rows[0].keys()))\n');
  await box.locator('.rchkb').click();
  await box.locator('.rchk:not([hidden])').waitFor({ timeout: 90000 });
  R.correct = (await box.locator('.rchk').textContent()).slice(0, 40);
  await box.locator('.edta').fill('print(40, "rows")\n');
  await box.locator('.rchkb').click();
  await page.waitForFunction(() => /Not yet|Almost/.test(document.querySelector('.task.solved .rchk, .rchk.no, .rchk.almost')?.textContent || ''), null, { timeout: 30000 }).catch(() => {});
  R.wrong = (await box.locator('.rchk').textContent()).slice(0, 70);
  R.solvedBadge = await page.locator('.task.solved').count();
  // 2. flashcards with spaced repetition
  await page.goto('http://localhost:8765/index.html#flashcards'); await page.waitForTimeout(300);
  R.fcModes = await page.locator('[data-mode]').allTextContents();
  await page.click('.fl'); await page.click('.rate .good');
  await page.click('.fl'); await page.click('.rate .again');
  R.afterRate = await page.locator('[data-mode]').allTextContents();
  await page.reload(); await page.waitForTimeout(300);
  R.reopenMode = await page.locator('[data-mode].pri').textContent();
  // 3. export / import progress
  await page.goto('http://localhost:8765/index.html#home'); await page.waitForTimeout(300);
  const [dl] = await Promise.all([page.waitForEvent('download'), page.click('#pgSave')]);
  const p = await dl.path(); const saved = JSON.parse(fs.readFileSync(p, 'utf8'));
  R.exportKeys = Object.keys(saved.data).length;
  await page.evaluate(() => localStorage.clear()); await page.reload(); await page.waitForTimeout(300);
  await page.setInputFiles('#pgLoad', p); await page.waitForTimeout(500);
  R.importMsg = await page.locator('#pgMsg').textContent();
  // 4. folding, sticky jump bar, back to top
  await page.goto('http://localhost:8765/index.html#overview3'); await page.waitForTimeout(400);
  await page.click('.sec h2 .fold >> nth=1');
  R.folded = await page.locator('.sec.folded').count();
  await page.click('.toc .foldall'); R.foldAll = await page.locator('.sec.folded').count();
  await page.click('.toc .foldall'); 
  await page.evaluate(() => window.scrollTo(0, 3000)); await page.waitForTimeout(200);
  R.tocTop = await page.evaluate(() => Math.round(document.querySelector('.toc').getBoundingClientRect().top));
  R.toTopVisible = await page.locator('.totop:not([hidden])').count();
  // 5. videos, glossary, offline
  await page.goto('http://localhost:8765/index.html#lists'); await page.waitForTimeout(400);
  R.videoSection = await page.locator('#lists-video').count();
  R.videoTabs = await page.locator('.vtabs button').allTextContents();
  await page.click('.vthumb'); R.iframe = await page.locator('.vbox iframe').count();
  await page.goto('http://localhost:8765/index.html#videos'); await page.waitForTimeout(400);
  R.videosPage = await page.locator('.vcard').count();
  await page.goto('http://localhost:8765/index.html#glossary'); await page.waitForTimeout(300);
  R.glossary = await page.locator('.gitem').count();
  await page.fill('#gq', 'tuple'); R.glossaryTuple = await page.locator('.gitem').count();
  R.sw = await page.evaluate(async () => { const r = await navigator.serviceWorker.getRegistration(); return !!r; });
  console.log(JSON.stringify(R, null, 1)); console.log('errors', JSON.stringify(errs));
  await browser.close();
})();
