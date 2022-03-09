import jsdom  from 'jsdom';
import dotenv from 'dotenv';

// for getEnv helper
dotenv.config();

const { JSDOM }    = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document    = document;

// @ts-expect-error
global.window = document.defaultView;

// eslint-disable-next-line
console.error = (message: any) => {
    throw new Error(message);
};
