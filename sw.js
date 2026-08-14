const CACHE_NAME = 'daxon-car-rental-v1';

self.addEventListener('install', function(event){
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim());
});

// Simple network-first pass-through so the app stays installable
// without breaking any live Firebase data or map tile requests.
self.addEventListener('fetch', function(event){
  event.respondWith(
    fetch(event.request).catch(function(){
      return caches.match(event.request);
    })
  );
});
