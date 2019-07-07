/* eslint-disable */

const staticPagesMatchCB = ({ url, event }) => {
    if (url.hostname === 'localhost') {
        return !(new RegExp('(public|dist)', 'gi').test(url.pathname))
    }

    return false;
}

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.core.setCacheNameDetails({
    prefix  : 'new_boilerplate_cache',
    precache: 'precache',
    runtime : 'runtime',
});

workbox.routing.registerRoute(
    staticPagesMatchCB,
    new workbox.strategies.NetworkFirst({
        cacheName: 'pages_cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7
            })
        ]
    })
);

workbox.routing.registerRoute(
    /\.css$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'stylesheets_cache',
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
    /.*(?:googleapis|gstatic)\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'google_api_cache',
    })
);

workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'images_cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7
            })
        ]
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

workbox.precaching.precacheAndRoute(self.__precacheManifest);
