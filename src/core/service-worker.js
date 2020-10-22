/* eslint-disable no-restricted-globals */
import { precacheAndRoute, cleanupOutdatedCaches }        from 'workbox-precaching';
import { CacheableResponsePlugin }                        from 'workbox-cacheable-response';
import { registerRoute, setCatchHandler }                 from 'workbox-routing';
import { ExpirationPlugin }                               from 'workbox-expiration';
import { setCacheNameDetails, skipWaiting, clientsClaim } from 'workbox-core';
import {
    CacheFirst,
    StaleWhileRevalidate,
    NetworkFirst,
    NetworkOnly
} from 'workbox-strategies';

setCacheNameDetails({
    prefix  : 'new_boilerplate_cache',
    precache: 'precache',
    runtime : 'runtime'
});
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

skipWaiting();
clientsClaim();

registerRoute(
    /\.css$/,
    new StaleWhileRevalidate({
        cacheName: 'stylesheets_cache',
        plugins  : [
            new ExpirationPlugin({
                maxAgeSeconds    : 60 * 60 * 24 * 7,
                purgeOnQuotaError: true
            })
        ]
    })
);

registerRoute(
    /.*(?:googleapis|gstatic)\.com/,
    new StaleWhileRevalidate({
        cacheName: 'google_api_cache',
    })
);

registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif|ico)$/,
    new CacheFirst({
        cacheName: 'images_cache',
        plugins  : [
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 7
            })
        ]
    })
);

registerRoute(
    /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    new CacheFirst({
        cacheName: 'fonts_cache',
        plugins  : [
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 7
            })
        ]
    })
);

registerRoute(
    /\/*/,
    new NetworkFirst({
        cacheName: 'pages_cache',
        plugins  : [
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 7
            }),
            new CacheableResponsePlugin({
                headers: {
                    'X-Is-Cacheable': 'true'  // set this header on server side for caching static pages
                }
            })
        ]
    })
);

// If anything goes wrong when handling a route, return the network response.
setCatchHandler(new NetworkOnly());

self.addEventListener('push', (event) => {
    const title   = 'Donut Notify';
    const options = {
        body: event.data.text(),
        icon: '/public/images/logo512x512.png'
    };

    event.waitUntil(self.registration.showNotification(title, options));
});
