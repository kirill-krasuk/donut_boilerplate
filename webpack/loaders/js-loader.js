function getJsLoader(isClient = true) {
    const jsLoader = {
        test   : /\.(j|t)s(x)?$/,
        loader : 'babel',
        exclude: [ /node_modules/, /\.(spec|test)\.js$/ ]
    };

    if (isClient && process.env.BABEL_ENV === 'development') {
        jsLoader.loader = `cache?cacheDirectory=.cache/js-cache!${ jsLoader.loader }?cacheDirectory=.cache/babel`;
    }

    return jsLoader;
}

module.exports = { getJsLoader };
