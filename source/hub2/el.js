const { chromium } = require('playwright');
(async () => {
  const [target, width, scheme, sel, idx, pre, name] = process.argv.slice(2);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: +width, height: 900 }, colorScheme: scheme });
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  await page.goto('file://' + process.cwd() + '/out/preview.html#' + target);
  await page.waitForTimeout(300);
  if (pre) { await page.evaluate(pre); await page.waitForTimeout(600); }
  const loc = page.locator(sel).nth(+idx || 0);
  await loc.screenshot({ path: 'out/' + (name || 'el') + '.png' });
  console.log('errors', JSON.stringify(errs));
  await browser.close();
})();
