/* Version 2 now lives at the main address. This removes the old offline copy of /v2/ from browsers that had it. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf('pyhub2-') === 0; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.registration.unregister(); }).then(function () { return self.clients.matchAll({ type: 'window' }); }).then(function (cs) {
    cs.forEach(function (c) { c.navigate(c.url); });
  }));
});
