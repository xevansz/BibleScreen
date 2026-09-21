const CACHE = 'telugu-bible-v1';
const STATIC = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Cache-first for Bible JSON data (GitHub/jsDelivr), network-first for everything else
  const url = e.request.url;
  const isBibleData = url.includes('aruljohn') || url.includes('jsdelivr');

  if (isBibleData) {
    e.respondWith(
      caches.open(CACHE).then(async cache => {
        const cached = await cache.match(e.request);
        if (cached) return cached;
        const resp = await fetch(e.request);
        if (resp.ok) cache.put(e.request, resp.clone());
        return resp;
      })
    );
  } else {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
  }
});
