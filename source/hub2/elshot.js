const { chromium } = require('playwright');
(async () => {
  const [id, width, scheme, name, sel, idx] = process.argv.slice(2);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: +width, height: 900 }, colorScheme: scheme });
  const errs = []; page.on('pageerror', e => errs.push(e.message));
  await page.goto('http://localhost:8765/index.html#' + id);
  await page.waitForTimeout(600);
  await page.locator(sel).nth(+(idx || 0)).screenshot({ path: 'out/' + name + '.png' });
  console.log('errors', JSON.stringify(errs));
  await browser.close();
})();
