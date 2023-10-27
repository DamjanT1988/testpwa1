/* eslint no-restricted-globals: "off" */
/* global self */
// serviceWorker.js

const CACHE_NAME = "version-1";
const urlsToCache = [
    'index.html',
    'manifest.json',
    'robots.txt',
    'favicon.ico',
    'logo192.png',
    'logo512-png',
    'serviceWorker.js', 
    'offline/offline.html', 
    'offline/App.css', 
    'offline/App.js', 
    'offline/Calculator.js', 
    'offline/Index.js',
    'offline/Index.css',
    'offline/logo.svg',
    'offline/serviceWorker.js',
    'offline/reportWebVitals.js',
    'offline/setupTests.js'];

const self = this;

// Install a service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request) 
                    .catch(() => caches.match('offline.html'))
            })
    )
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});

// In your service worker file
caches.open(CACHE_NAME)
  .then((cache) => {
    return cache.addAll(urlsToCache);
  })
  .catch((error) => {
    console.error('Failed to open cache:', error);
  });
