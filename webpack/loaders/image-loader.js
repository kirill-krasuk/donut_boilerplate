function getImageLoader(isClient = true) {
    const imageLoader = {
        test   : /\.(gif|png|jpe?g)$/i,
        loader : 'file',
        options: {
            name      : '[name].[ext]',
            outputPath: '../public/images',
            publicPath: '/public/images',
            emit      : !isClient
        }
    };

    return imageLoader;
}

module.exports = { getImageLoader };
