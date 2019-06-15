/* eslint-disable */
// importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.core.setCacheNameDetails({
    prefix  : 'new_boilerplate_cache',
    precache: 'precache',
    runtime : 'runtime',
});

workbox.routing.registerRoute(
    new RegExp('\.css$'),
    new workbox.strategies.CacheFirst({
        cacheName: 'stylesheets_cachhe',
        plugins  : [
            new workbox.expiration.Plugin({
                maxAgeSeconds    : 60 * 60 * 24 * 7,
                maxEntries       : 20,
                purgeOnQuotaError: true
            })
        ]
    })
);

self.addEventListener('push', (event) => {
    const title   = 'New Boilerplate Notification';
    const options = {
        body: event.data.text()
    };

    console.log(event);
    
    event.waitUntil(self.registration.showNotification(title, options));
});

self.__precacheManifest = ['/', 'index.html'].concat(self.__precacheManifest || []);

workbox.precaching.precacheAndRoute(self.__precacheManifest);
