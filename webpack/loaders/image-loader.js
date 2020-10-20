const { isProd }           = require('../utils/isProd');
const { createHashHelper } = require('../utils/createHashHelper');

const addHash = createHashHelper(isProd());

function getImageLoader() {
    return {
        test: /\.(gif|png|jpe?g)$/i,
        use : [
            {
                loader : 'file-loader',
                options: {
                    name      : addHash('[name].[ext]', 'contenthash:8'),
                    outputPath: '../public/images/build',
                    publicPath: '/public/images/build'
                }
            },
            {
                loader : 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality    : 65
                    },
                    optipng: {
                        enabled: process.env.NODE_ENV === 'production'
                    },
                    pngquant: {
                        quality: [ 0.65, 0.90 ],
                        speed  : 4
                    },
                    gifsicle: {
                        interlaced: false
                    }
                }
            }
        ]
    };
}

module.exports = { getImageLoader };
