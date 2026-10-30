const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message)); const R = {};
  await p.goto('http://localhost:8765/index.html?localpy#strings'); await p.waitForTimeout(600);
  R.tryButtons = await p.locator('.trycell').count();
  await p.click('.trycell >> nth=0'); await p.locator('.trybox .rrun').click();
  await p.locator('.trybox .rtext').filter({ hasText: /\S/ }).waitFor({ timeout: 90000 });
  R.tryOut = (await p.locator('.trybox .rtext').textContent()).slice(0, 40);
  await p.goto('http://localhost:8765/index.html?localpy#reference'); await p.waitForTimeout(400);
  R.refRows = await p.locator('.reft tbody tr').count();
  await p.fill('#rq', 'strip'); R.refStrip = await p.locator('.reft tbody tr').count();
  await p.fill('#rq', ''); await p.click('.reftb >> nth=0'); await p.locator('.reftry .rrun').click();
  await p.locator('.reftry .rtext').filter({ hasText: /\S/ }).waitFor({ timeout: 60000 });
  R.refRun = (await p.locator('.reftry .rtext').textContent()).trim();
  // what a non-JavaScript reader sees
  const raw = await (await p.request.get('http://localhost:8765/index.html')).text();
  R.rawHasChapters = (raw.match(/learn\/[a-z0-9]+\.html/g) || []).length;
  const st = await (await p.request.get('http://localhost:8765/learn/lists.html')).text();
  R.staticLists = { bytes: st.length, h1: (st.match(/<h1>([^<]*)/) || [])[1], codeBlocks: (st.match(/<pre><code>/g) || []).length };
  await p.goto('http://localhost:8765/learn/overview3.html'); await p.waitForTimeout(200);
  R.staticOv3 = await p.locator('h2').count();
  console.log(JSON.stringify(R, null, 1), '\nerrors', JSON.stringify(errs)); await b.close();
})();
