const { isProd }           = require('../utils/isProd');
const { createHashHelper } = require('../utils/createHashHelper');

const addHash = createHashHelper(isProd());

function getFontsLoader() {
    const fontsLoader = {
        test  : /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: [ {
            loader : 'file',
            options: {
                name      : addHash('[name].[ext]', 'contenthash:8'),
                outputPath: '../public/fonts/build',
                publicPath: '/public/fonts/build',
            }
        } ]
    };

    if (!isProd()) {
        fontsLoader.loader.unshift({
            loader : 'cache',
            options: {
                cacheDirectory: '.cache/fonts-cache'
            }
        });
    }

    return fontsLoader;
}

module.exports = { getFontsLoader };
