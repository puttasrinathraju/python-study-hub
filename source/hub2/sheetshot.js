// Renders each picture sheet to PNG: out/<name>.png (preview) or img/sheet-ovN.png (for Save as image)
const { chromium } = require('playwright');
(async () => {
  const [parts, width, dest] = process.argv.slice(2);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: +width, height: 900 }, deviceScaleFactor: dest === 'img' ? 2 : 1, colorScheme: 'dark' });
  const errs = []; page.on('pageerror', e => errs.push(e.message));
  for (const n of parts.split(',')) {
    await page.goto('http://localhost:8765/index.html#overview' + n);
    await page.waitForFunction(() => [...document.querySelectorAll('.sheet img')].every(i => i.complete && i.naturalWidth));
    const el = page.locator('#sheet' + n);
    await el.screenshot({ path: dest === 'img' ? 'img/sheet-ov' + n + '.png' : 'out/sheet' + n + '_' + width + '.png' });
  }
  console.log('errors', JSON.stringify(errs));
  await browser.close();
})();
