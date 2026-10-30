const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errs = []; page.on('pageerror', e => errs.push(e.message));
  await page.goto('http://localhost:8765/index.html#overviews');
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'out/gallery.png' });
  // search the finder
  await page.fill('#ovq', 'tuple');
  await page.waitForTimeout(150);
  const rows = await page.$$eval('.ovrow', r => r.map(x => x.textContent));
  console.log('finder rows for "tuple":', rows.length, rows.slice(0, 5));
  await page.click('.ovrow >> nth=0');
  await page.waitForTimeout(700);
  const st = await page.evaluate(() => ({ hash: location.hash, y: Math.round(scrollY), flash: !!document.querySelector('.flash') }));
  console.log('after jump', JSON.stringify(st));
  await page.screenshot({ path: 'out/jump.png' });
  // try button
  await page.click('.trybtn >> nth=0');
  await page.waitForTimeout(200);
  const ta = await page.$eval('.vs .edta', t => t.value.slice(0, 60));
  console.log('try box opened with:', JSON.stringify(ta));
  // mark done
  await page.click('#doneBtn');
  await page.waitForTimeout(150);
  const dot = await page.$eval('.chlink.ovl[data-go="overview3"] .dot', d => d.textContent);
  console.log('sidebar dot after done:', dot, 'top title:', await page.textContent('#topTitle'));
  // endnav from last chapter of part 3
  await page.evaluate(() => { location.hash = 'comprehensions'; });
  await page.waitForTimeout(300);
  console.log('comprehensions next button:', await page.$eval('.endnav .btn.pri', b => b.textContent + ' -> ' + b.getAttribute('data-go')));
  await page.evaluate(() => { location.hash = 'overview3'; });
  await page.waitForTimeout(300);
  console.log('overview3 endnav:', await page.$$eval('.endnav .btn', b => b.map(x => x.textContent + ' -> ' + x.getAttribute('data-go'))));
  // quiz answer
  await page.click('#quizBox .opt >> nth=1');
  console.log('quiz feedback:', (await page.textContent('#quizBox .expl')).slice(0, 60));
  // flashcards tool with part 3 filter count
  await page.evaluate(() => { location.hash = 'flashcards'; });
  await page.waitForTimeout(300);
  await page.click('#fcf button[data-p="3"]');
  console.log('flashcards part 3:', await page.textContent('.fcbar span'));
  // home
  await page.evaluate(() => { location.hash = 'home'; });
  await page.waitForTimeout(400);
  console.log('home ovli count:', await page.$$eval('.ovli', x => x.length), 'tools:', await page.$$eval('.tool b', x => x.map(y => y.textContent)));
  await page.screenshot({ path: 'out/home.png', fullPage: false });
  console.log('errors', JSON.stringify(errs));
  await browser.close();
})();
