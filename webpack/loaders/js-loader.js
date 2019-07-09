const jsLoader = {
    test   : /\.jsx?$/,
    exclude: /node_modules/,
    loader : 'babel?cacheDirectory'
};

if (process.env.BABEL_ENV === 'development') {
    jsLoader.loader = `cache!${  jsLoader.loader }`;
}

module.exports = jsLoader;
