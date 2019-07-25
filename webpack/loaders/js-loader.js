function getJsLoader(isClient = true) {
    const jsLoader = {
        test  : /\.jsx?$/,
        loader: 'babel'
    };

    if (isClient && process.env.BABEL_ENV === 'development') {
        jsLoader.loader = `cache?cacheDirectory=.cache/js-cache!${  jsLoader.loader }?cacheDirectory=.cache/babel`;
    }

    return jsLoader;
}

module.exports = { getJsLoader };
