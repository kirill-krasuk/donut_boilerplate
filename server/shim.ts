/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/no-empty-function */
import 'core-js/stable';

global.fetch = require('node-fetch');
require('abortcontroller-polyfill/dist/polyfill-patch-fetch');

// @ts-expect-error
global.$RefreshReg$ = () => {};

// @ts-expect-error
global.$RefreshSig$ = () => () => {};

export {};
