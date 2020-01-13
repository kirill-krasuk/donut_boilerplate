/* eslint-disable */

workbox.setConfig({ debug: false });

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.core.setCacheNameDetails({
    prefix  : 'new_boilerplate_cache',
    precache: 'precache',
    runtime : 'runtime'
});

workbox.routing.registerRoute(
    /\.css$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'stylesheets_cache',
        plugins  : [
            new workbox.expiration.Plugin({
                maxAgeSeconds    : 60 * 60 * 24 * 7,
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

workbox.routing.registerRoute(
    /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'fonts_cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7
            })
        ]
    })
);

workbox.routing.registerRoute(
    /\/*/,
    new workbox.strategies.NetworkFirst({
        cacheName: 'pages_cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7
            }),
            new workbox.cacheableResponse.Plugin({
                headers: {
                    "X-Is-Cacheable": "true"  // set this header on server side for caching static pages
                }
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
