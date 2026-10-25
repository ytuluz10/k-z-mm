const CACHE_NAME = 'erva-v1';
const urlsToCache = [
  './',
  './index.html',
  './anne.html',
  './baba.html',
  './erva.html',
  './dogum-gunlerim.html',
  './ilk-yil.html',
  './styles.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
