// Screenshots of the Matplotlib vs Seaborn parts (chapter 30 and the Part 10 overview), desktop + phone, light + dark.
const { chromium } = require('playwright');
const SH = require('path').join(__dirname, '..', 'shots') + '/';
(async () => {
  const b = await chromium.launch();
  for (const [w, h, tag] of [[1400, 900, 'd'], [390, 844, 'm']]) {
    for (const dark of [false, true]) {
      const p = await b.newPage({ viewport: { width: w, height: h }, colorScheme: dark ? 'dark' : 'light' });
      const errs = []; p.on('pageerror', e => errs.push(e.message));
      for (const [route, head] of [['sns2', 'Matplotlib vs Seaborn'], ['overview10', 'Matplotlib vs Seaborn']]) {
        await p.goto('http://localhost:8765/index.html?localpy#' + route); await p.waitForTimeout(1200);
        const hd = p.locator('h2', { hasText: head }).first();
        await hd.scrollIntoViewIfNeeded(); await p.waitForTimeout(800);
        const y = await hd.evaluate(e => e.getBoundingClientRect().top + window.scrollY);
        const wide = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
        await p.evaluate(y => window.scrollTo(0, y - 70), y); await p.waitForTimeout(500);
        await p.screenshot({ path: SH + `vs-${route}-${tag}${dark ? '-dark' : ''}.png` });
        console.log(route, tag, dark ? 'dark' : 'light', 'sideways scroll:', wide);
      }
      if (errs.length) console.log('page errors', errs);
      await p.close();
    }
  }
  await b.close();
})();
