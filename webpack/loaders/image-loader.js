function getImageLoader(isClient = true) {
    const imageLoader = {
        test  : /\.(gif|png|jpe?g)$/i,
        loader: [
            {
                loader : 'file',
                options: {
                    name      : '[name].[contenthash:8].[ext]',
                    outputPath: '../public/images/build',
                    publicPath: '/public/images/build',
                    emit      : !isClient
                }
            },
            'thread',
            {
                loader : 'image-webpack',
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

    return imageLoader;
}

module.exports = { getImageLoader };
