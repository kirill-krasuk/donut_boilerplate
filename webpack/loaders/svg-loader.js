function getSVGLoader(isClient = true) {
    const SVGLoader = {
        test  : /\.svg$/,
        loader: 'babel!react-svg?jsx'
    };

    if (isClient) {
        // SVGLoader.loader.unshift('cache?cacheDirectory=.cache/svg-cache');
        SVGLoader.loader = `cache?cacheDirectory=.cache/svg-cache!${ SVGLoader.loader }`;
    }

    return SVGLoader;
}

module.exports = { getSVGLoader };
