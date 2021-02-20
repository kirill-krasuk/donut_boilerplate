/* eslint-disable @typescript-eslint/no-empty-function */

// @ts-ignore
global.fetch = require('node-fetch');
require('abortcontroller-polyfill/dist/polyfill-patch-fetch');

require('@server/polyfills/array');

// @ts-expect-error
global.$RefreshReg$ = () => {};

// @ts-expect-error
global.$RefreshSig$ = () => () => {};
