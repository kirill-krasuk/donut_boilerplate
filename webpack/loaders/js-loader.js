function getJsLoader(isClient = true) {
    const jsLoader = {
        test   : /\.jsx?$/,
        loader : 'babel',
        exclude: [ /node_modules/, /\.(spec|test)\.js$/, /node_modules\/(?!react-intl|intl-messageformat|intl-messageformat-parser)/ ]
    };

    if (isClient && process.env.BABEL_ENV === 'development') {
        jsLoader.loader = `cache?cacheDirectory=.cache/js-cache!thread!${  jsLoader.loader }?cacheDirectory=.cache/babel`;
    }

    return jsLoader;
}

module.exports = { getJsLoader };
