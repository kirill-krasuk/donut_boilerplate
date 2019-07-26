function getSVGLoader(isClient = true) {
    const SVGLoader = {
        test  : /\.svg$/,
        loader: [
            'babel',
            {
                loader : 'react-svg',
                options: {
                    jsx : true,
                    svgo: {
                        plugins: [ {
                            removeTitle               : true,
                            inlineStyles              : true,
                            removeEmptyAttrs          : true,
                            convertColors             : true,
                            removeUselessStrokeAndFill: true,
                            removeDimensions          : true,
                        } ],
                        floatPrecision: 2
                    }
                }
            }
        ]
    };

    if (isClient) {
        SVGLoader.loader.unshift('cache?cacheDirectory=.cache/svg-cache');
    }

    return SVGLoader;
}

module.exports = { getSVGLoader };
