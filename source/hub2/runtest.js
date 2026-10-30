const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await page.goto('http://localhost:8765/index.html?localpy#intro');
  await page.waitForTimeout(500);
  const box = page.locator('.runner').first();
  const ta = box.locator('textarea');
  async function run(code, wait = 25000) {
    await ta.fill(code);
    await box.locator('.rrun').click();
    await page.waitForFunction(el => !el.querySelector('.rrun').disabled, await box.elementHandle(), { timeout: wait });
    return await box.evaluate(el => ({ out: el.querySelector('.rtext').textContent, err: el.querySelector('.rerr').hidden ? '' : el.querySelector('.rerr').textContent, input: !el.querySelector('.inrow').hidden, stat: el.querySelector('.rstat').textContent }));
  }
  let t0 = Date.now();
  console.log('1', JSON.stringify(await run('print("Hello")\nfor i in range(3):\n    print(i * 2)')), (Date.now()-t0)+'ms');
  console.log('2', JSON.stringify(await run('x = 10\nprint(x / 0)')));
  console.log('3', JSON.stringify(await run('if True\n    print(1)')));
  let r = await run('name = input("Name: ")\nage = int(input("Age: "))\nprint(f"{name} is {age}")');
  console.log('4a', JSON.stringify(r));
  await box.locator('.inbox').fill('Asha'); await box.locator('.inrow button').click();
  await page.waitForFunction(el => !el.querySelector('.rrun').disabled, await box.elementHandle());
  await box.locator('.inbox').fill('25'); await box.locator('.inrow button').click();
  await page.waitForFunction(el => !el.querySelector('.rrun').disabled && el.querySelector('.inrow').hidden, await box.elementHandle());
  console.log('4b', JSON.stringify(await box.evaluate(el => el.querySelector('.rtext').textContent)));
  // infinite loop + stop
  await ta.fill('n = 0\nwhile True:\n    n += 1');
  await box.locator('.rrun').click();
  await page.waitForTimeout(1500);
  await box.locator('.rstop').click();
  await page.waitForTimeout(300);
  console.log('5', JSON.stringify(await box.evaluate(el => ({ err: el.querySelector('.rerr').textContent, stat: el.querySelector('.rstat').textContent }))));
  t0 = Date.now();
  console.log('6', JSON.stringify(await run('import math, json, random, datetime\nprint(math.sqrt(16))\nwith open("t.txt","w") as f:\n    f.write("hi")\nprint(open("t.txt").read())')), (Date.now()-t0)+'ms');
  await page.screenshot({ path: 'out/runner.png', clip: await box.boundingBox() });
  console.log('errors', JSON.stringify(errs));
  await browser.close();
})();
