import '@babel/polyfill';

// @ts-ignore
global.fetch = require('node-fetch');
require('abortcontroller-polyfill/dist/polyfill-patch-fetch');
