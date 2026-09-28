// Shift Fordham staff app service worker — isolated from the manager app
// at /FordhamRota/manage/, which has its own service worker and cache name.
const CACHE_NAME = 'shift-fordham-v1';

// This app relies on live Firestore data, so requests are deliberately
// passed through to the network rather than cached by this worker.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
