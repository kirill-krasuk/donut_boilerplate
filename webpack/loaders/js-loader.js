const { isProd } = require('../utils/isProd');

function getJsLoader() {
    const jsLoader = {
        test   : /\.(j|t)s(x)?$/,
        use    : [ { loader: 'babel-loader' } ],
        exclude: [ /node_modules/, /\.(spec|test)\.js$/ ]
    };

    if (!isProd()) {
        jsLoader.use.unshift({
            loader : 'cache-loader',
            options: {
                cacheDirectory: '.cache/js-cache'
            }
        });
    }

    return jsLoader;
}

module.exports = { getJsLoader };
