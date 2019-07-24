function getImageLoader(isClient = true) {
    const imageLoader = {
        test   : /\.(gif|png|jpe?g)$/i,
        loader : 'file',
        options: {
            name      : '../public/images/[name].[ext]',
            publicPath: url => url.replace(/\.\.\/public/, ''),
            emit      : !isClient
        }
    };

    return imageLoader;
}

module.exports = { getImageLoader };
