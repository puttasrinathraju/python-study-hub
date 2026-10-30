const { chromium } = require('playwright');
(async () => {
  const [id, width, scheme, name, gallery] = process.argv.slice(2);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: +width, height: 900 }, colorScheme: scheme });
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  if (gallery) {
    await page.goto('http://localhost:8765/index.html#home');
    await page.evaluate(i => { localStorage.setItem('pyhub:posterSel', JSON.stringify(i)); location.hash = 'posters'; }, id);
  } else await page.goto('http://localhost:8765/index.html#' + id);
  await page.waitForTimeout(600);
  const el = page.locator('.poster').first();
  await el.screenshot({ path: 'out/' + name + '.png' });
  console.log('errors', JSON.stringify(errs));
  await browser.close();
})();
