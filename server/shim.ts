/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/no-empty-function */

global.fetch = require('node-fetch');
require('abortcontroller-polyfill/dist/polyfill-patch-fetch');

// @ts-expect-error
global.$RefreshReg$ = () => {};

// @ts-expect-error
global.$RefreshSig$ = () => () => {};
