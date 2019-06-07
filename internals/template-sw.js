/* eslint-disable no-restricted-globals */

const CACHE_NAME  = 'bundle';
const cachedItems = [
    '/',
    '/index.html',
    '/dist/bundle.js',
    '/dist/bundle.js.map',
    '/dist/bundle.js.gz',
    '/dist/runtime.js',
    '/dist/runtime.js.map',
    '/dist/runtime.js.gz',
    '/dist/vendors.js',
    '/dist/vendors.js.map',
    '/dist/vendors.js.gz',
];

self.addEventListener('install', (event) => {
    console.log('SW installing');

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(cachedItems))
            .then(() => {
                console.log('Caches added');
            })
            .catch((error) => {
                console.error('Error on installing');
                console.error(error);
            })
    );
});

self.addEventListener('activate', () => {
    console.log('SW now ready to handle fetches!');
});

self.addEventListener('fetch', (event) => {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request)
                .then(response => caches.open(CURRENT_CACHES.prefetch)
                    .then((cache) => {
                        // cache response after making a request
                        cache.put(event.request, response.clone());

                        // return original response
                        return response;
                    })
                ))
    );
});
