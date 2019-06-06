const dotenv = require('dotenv');
const R      = require('ramda');

const envs = {
    ...dotenv.config().parsed,
    NODE_ENV: process.env.NODE_ENV
};

function getEnv(prop, defaultProp) {
    if (R.path([ prop ], envs)) {
        return R.path([ prop ], envs);
    }

    return defaultProp;
}

module.exports = getEnv;
