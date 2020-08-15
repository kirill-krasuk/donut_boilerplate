const { isProd } = require('../utils/isProd');

function getJsLoader() {
    const jsLoader = {
        test   : /\.(j|t)s(x)?$/,
        loader : [ { loader: 'babel' } ],
        exclude: [ /node_modules/, /\.(spec|test)\.js$/ ]
    };

    if (!isProd()) {
        jsLoader.loader.unshift({
            loader : 'cache',
            options: {
                cacheDirectory: '.cache/js-cache'
            }
        });
    }

    return jsLoader;
}

module.exports = { getJsLoader };
