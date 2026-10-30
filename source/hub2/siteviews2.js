const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const ids = ['home','flashcards','exam','cheatsheet','posters','intro','variables','output','operators','conditions','forloops','whileloops','strings','lists','tuples','sets','dicts','comprehensions','functions','functions2','errors','files','modules','oop','numpy1','numpy2','projects','overviews','overview1','overview2','overview3','overview4','overview5','overview6','overview7','overview8','glossary','videos','reference'];
  for (const [w, scheme] of [[1280,'light'],[390,'dark']]) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 }, colorScheme: scheme });
    const errs = [];
    page.on('pageerror', e => errs.push(e.message));
    await page.goto('http://localhost:8765/v2/index.html#home');
    for (const id of ids) {
      await page.evaluate(i => { location.hash = i; }, id);
      await page.waitForTimeout(150);
      const r = await page.evaluate(() => {
        document.querySelectorAll('.player').forEach(p => { p.querySelector('.bigplay').click(); const n = p.querySelectorAll('.ticks button').length; for (let i=0;i<n;i++) p.querySelector('.nx').click(); });
        document.querySelectorAll('.deck').forEach(d => { const n = d.querySelectorAll('.sdots button').length; for (let i=0;i<n;i++) d.querySelector('.nx').click(); });
        const ov = document.documentElement.scrollWidth - window.innerWidth;
        return { ov, runners: document.querySelectorAll('.runner').length, posters: document.querySelectorAll('.poster').length, decks: document.querySelectorAll('.deck').length, vs: document.querySelectorAll('.vs').length, defs: document.querySelectorAll('.def').length, tries: document.querySelectorAll('.trybtn').length };
      });
      if (w === 1280) console.log(id, JSON.stringify(r)); else if (r.ov > 0) console.log('OVERFLOW', w, id, r.ov);
    }
    console.log(w, scheme, 'errors:', JSON.stringify(errs));
    await page.close();
  }
  await browser.close();
})();
