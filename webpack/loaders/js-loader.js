function getJsLoader() {
    const jsLoader = {
        test  : /\.jsx?$/,
        loader: 'babel?cacheDirectory'
    };

    if (process.env.BABEL_ENV === 'development') {
        jsLoader.loader = `cache!${  jsLoader.loader }`;
    }

    return jsLoader;
}

module.exports = { getJsLoader };
