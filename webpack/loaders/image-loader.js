function getImageLoader(isClient = true) {
    const imageLoader = {
        test  : /\.(gif|png|jpe?g)$/i,
        loader: [
            {
                loader : 'file',
                options: {
                    name      : '[name].[ext]',
                    outputPath: '../public/images',
                    publicPath: '/public/images',
                    emit      : !isClient
                }
            }
        ]
    };

    if (isClient) {
        imageLoader.loader.unshift('cache?cacheDirectory=.cache/images-cache');
        imageLoader.loader.push(
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
                    },
                    webp: {
                        quality: 75
                    }
                }
            }
        );
    }

    return imageLoader;
}

module.exports = { getImageLoader };
