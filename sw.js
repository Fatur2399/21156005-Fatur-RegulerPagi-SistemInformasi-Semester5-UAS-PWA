const CACHE_NAME = "komentar-cache-v1";

// Daftar sumber daya yang akan di-cache
const urlsToCache = [
  "/",
  "/index.html",
  "/style/style.css",
  "/images/hero.svg",
  // ... Daftar sumber daya lainnya yang perlu di-cache
];

// Install Service Worker
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Menginstall cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Aktifkan Service Worker
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log("Menghapus cache lama:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercept fetch requests dan mengembalikan sumber daya dari cache jika tersedia
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
