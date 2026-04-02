const CACHE_NAME = 'hangman-v3.0.0';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.svg',
  '/icon-192.png',
  '/icon-512.png',
  // Dodaj CSS i JS fajlove ako su odvojeni
  // '/style.css',
  // '/script.js'
];

// 📥 Instalacija: Keširanje svih resursa
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching assets');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// 🔄 Aktivacija: Brisanje starih keševa
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 🌐 Fetch: Strategija "Cache First, Network Fallback"
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // Opcionalno: Vrati offline stranicu ako postoji
        return caches.match('/index.html');
      });
    })
  );
});