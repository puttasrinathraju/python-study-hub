/* Offline support: the site and the Python runner keep working after your first visit. */
var VERSION = 'pyhub2-v1';
var CORE = ['./', 'index.html', 'py-worker.js', 'data/hotel_bookings.csv'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION && k.indexOf('pyhub2-') === 0; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
function put(req, res) { if (res && (res.ok || res.type === 'opaque')) { var copy = res.clone(); caches.open(VERSION).then(function (c) { c.put(req, copy); }); } return res; }
self.addEventListener('fetch', function (e) {
  var req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;
  if (/youtube|ytimg|googlevideo/.test(url.hostname)) return;            // videos always need the internet
  if (url.hostname === 'cdn.jsdelivr.net' && url.pathname.indexOf('/pyodide/') === 0) {
    // Python runtime files never change for a version: cache first
    e.respondWith(caches.match(req).then(function (hit) { return hit || fetch(req).then(function (res) { return put(req, res); }); }));
    return;
  }
  if (url.origin === self.location.origin) {
    // site files: use the network when online (so updates arrive), fall back to the saved copy offline
    e.respondWith(fetch(req).then(function (res) { return put(req, res); }).catch(function () {
      return caches.match(req, { ignoreSearch: true }).then(function (hit) { return hit || caches.match('index.html'); });
    }));
  }
});
