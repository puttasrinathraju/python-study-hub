// Run every new example in the real browser Python (Pyodide, wasm32) and compare with the expected output.
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('http://localhost:8765/index.html?localpy#home'); await p.waitForTimeout(500);
  const prefixes = process.argv.slice(2);
  const res = await p.evaluate(async (prefixes) => {
    const items = (await (await fetch('items.json')).json()).filter(it => prefixes.some(x => it.id.startsWith(x)));
    const w = new Worker('py-worker.js'); let id = 0; const wait = {};
    w.onmessage = e => { const m = e.data; if (m.type === 'ready' && wait.ready) wait.ready(m); if (m.type === 'done' && wait[m.id]) wait[m.id](m); };
    await new Promise(r => { wait.ready = r; w.postMessage({ type: 'init', indexURL: new URL('pyodide_local/', location.href).href, data: ['hotel_bookings.csv'] }); });
    const norm = s => (s || '').replace(/\s+$/, '').split('\n').map(l => l.replace(/\s+$/, '')).join('\n').replace(/^\n+/, '');
    const bad = [];
    for (const it of items) {
      const m = await new Promise(r => { const k = ++id; wait[k] = r; w.postMessage({ type: 'run', id: k, code: it.code }); });
      if (it.err) { if (m.status !== 'error') bad.push([it.id, 'expected an error']); continue; }
      if (m.status !== 'ok' || norm(m.out) !== norm(it.out)) bad.push([it.id, m.status, norm(m.out).slice(0, 200), '| expected |', norm(it.out).slice(0, 200), (m.err || '').slice(-200)]);
    }
    return { n: items.length, bad };
  }, prefixes);
  console.log('pyodide checked', res.n, 'failed', res.bad.length); res.bad.forEach(x => console.log(JSON.stringify(x)));
  await b.close();
})();
