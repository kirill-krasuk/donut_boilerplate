require('@babel/register')({
    plugins: [
        'dynamic-import-node',
        'macros'
    ]
});

require('@babel/polyfill');

global.fetch = require('node-fetch');
require('abortcontroller-polyfill/dist/polyfill-patch-fetch');

require('@server/polyfills/promise');
require('@server/polyfills/array');
