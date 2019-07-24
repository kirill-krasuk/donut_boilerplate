function getJsLoader(isClient = true) {
    const jsLoader = {
        test  : /\.jsx?$/,
        loader: 'babel?cacheDirectory'
    };

    if (isClient && process.env.BABEL_ENV === 'development') {
        jsLoader.loader = `cache!${  jsLoader.loader }`;
    }

    return jsLoader;
}

module.exports = { getJsLoader };
