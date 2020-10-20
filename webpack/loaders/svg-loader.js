const svgToMiniDataURI = require('mini-svg-data-uri');

const { createHashHelper } = require('../utils/createHashHelper');
const { isProd }           = require('../utils/isProd');

const addHash = createHashHelper(isProd());

function getSVGLoader() {
    const SVGLoader = {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,

        // issuer: {
        //     test: /\.(j|t)s(x)?$/
        // },
        use: [ {
            loader: '@svgr/webpack'
        }, {
            loader : 'url-loader',
            options: {
                generator : (content) => svgToMiniDataURI(content.toString()),
                limit     : 4096,
                name      : addHash('[name].[ext]', 'contenthash:8'),
                outputPath: '../public/svgs/build',
                publicPath: '/public/svgs/build'
            },
        } ]
    };

    if (!isProd()) {
        SVGLoader.use.unshift({
            loader : 'cache-loader',
            options: {
                cacheDirectory: '.cache/svg-cache'
            }
        });
    }

    return SVGLoader;
}

module.exports = { getSVGLoader };
