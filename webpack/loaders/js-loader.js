function getJsLoader(isClient = true) {
    const jsLoader = {
        test   : /\.jsx?$/,
        loader : 'babel',
        exclude: /node_modules/
    };

    if (isClient && process.env.BABEL_ENV === 'development') {
        jsLoader.loader = `cache?cacheDirectory=.cache/js-cache!thread!${  jsLoader.loader }?cacheDirectory=.cache/babel`;
    }

    return jsLoader;
}

module.exports = { getJsLoader };
