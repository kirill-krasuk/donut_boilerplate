/* eslint-disable */

const precacheItems = [
    '/',
    '/second',
    '/favicon.ico'
]

workbox.core.setCacheNameDetails({
    prefix  : 'new_boilerplate_cache',
    precache: 'precache',
    runtime : 'runtime',
});

workbox.routing.registerRoute(
    /\.css$/,
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

workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'images-cache',
    })
  );

self.addEventListener('push', (event) => {
    const title   = 'Donut Notify';
    const options = {
        body: event.data.text(),
        icon: '/public/images/logo512x512.png'
    };
    
    event.waitUntil(self.registration.showNotification(title, options));
});

self.__precacheManifest = precacheItems.concat(self.__precacheManifest || []);

workbox.precaching.precacheAndRoute(self.__precacheManifest);
