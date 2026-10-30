const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const ids = ['home','flashcards','exam','cheatsheet','intro','variables','output','operators','conditions','forloops','whileloops','strings','lists','tuples','sets','dicts','comprehensions','functions','functions2','errors','files','modules','oop','numpy1','numpy2','projects'];
  for (const [w, scheme] of [[1280,'light'],[390,'dark']]) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 }, colorScheme: scheme });
    const errs = [];
    page.on('pageerror', e => errs.push(e.message));
    await page.goto('file://' + process.cwd() + '/out/preview.html#home');
    for (const id of ids) {
      await page.evaluate(i => { location.hash = i; }, id);
      await page.waitForTimeout(150);
      // play every explainer through all steps, flip every deck
      const r = await page.evaluate(() => {
        let issues = [];
        document.querySelectorAll('.player').forEach(p => { p.querySelector('.bigplay').click(); const n = p.querySelectorAll('.ticks button').length; for (let i=0;i<n;i++) p.querySelector('.nx').click(); });
        document.querySelectorAll('.deck').forEach(d => { const n = d.querySelectorAll('.sdots button').length; for (let i=0;i<n;i++) d.querySelector('.nx').click(); });
        const ov = document.documentElement.scrollWidth - window.innerWidth;
        // find elements wider than viewport not inside scroll containers
        document.querySelectorAll('.col > *').forEach(el => { if (el.getBoundingClientRect().right > window.innerWidth + 1) issues.push(el.className || el.tagName); });
        return { ov, issues: issues.slice(0,5), h: document.body.scrollHeight };
      });
      if (r.ov > 0 || r.issues.length) console.log(w, id, JSON.stringify(r));
    }
    console.log(w, scheme, 'errors:', JSON.stringify(errs));
    await page.close();
  }
  await browser.close();
})();
