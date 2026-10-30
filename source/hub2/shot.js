const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const html = fs.readFileSync('out/python-study-hub.html', 'utf8');
  const wrap = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><style>:root{color-scheme:light}body{margin:0;font:14px system-ui}img{max-width:100%}[hidden]{display:none!important}</style></head><body>' + html + '</body></html>';
  fs.writeFileSync('out/preview.html', wrap);
  const browser = await chromium.launch();
  const args = process.argv.slice(2);
  const target = args[0] || 'home';
  const width = +(args[1] || 1280);
  const scheme = args[2] || 'light';
  const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme: scheme });
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await page.goto('file://' + process.cwd() + '/out/preview.html#' + target);
  await page.waitForTimeout(400);
  if (args[3]) { await page.evaluate(args[3]); await page.waitForTimeout(500); }
  await page.screenshot({ path: `out/s_${target}_${width}_${scheme}.png`, fullPage: args[4] === 'full' });
  const ov = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  console.log('overflowX', ov, 'errors', JSON.stringify(errs));
  await browser.close();
})();
