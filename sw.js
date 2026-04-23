const CACHE_NAME = 'ktracker-v1';
const ASSETS = ['./', './index.html', './logo.png'];
self.addEventListener('install', (i) => {
  i.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});
self.addEventListener('fetch', (f) => {
  f.respondWith(caches.match(f.request).then((r) => r || fetch(f.request)));
});
