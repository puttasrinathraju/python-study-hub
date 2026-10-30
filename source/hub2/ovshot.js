const { chromium } = require('playwright');
(async () => {
  const [id, width, scheme, name] = process.argv.slice(2);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: +width, height: 900 }, colorScheme: scheme });
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  await page.goto('http://localhost:8765/index.html#' + id);
  await page.waitForTimeout(700);
  const ov = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  await page.screenshot({ path: 'out/' + name + '.png', fullPage: true });
  console.log('overflow', ov, 'errors', JSON.stringify(errs));
  await browser.close();
})();
