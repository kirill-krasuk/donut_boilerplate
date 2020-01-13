const dotenv = require('dotenv');
const R      = require('ramda');

const envs = {
    ...dotenv.config().parsed,
    NODE_ENV: process.env.NODE_ENV
};

export const getEnv = (prop, defaultProp) => R.pathOr(defaultProp, [ prop ], envs);
