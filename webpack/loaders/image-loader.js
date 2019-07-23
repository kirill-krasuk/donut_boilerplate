const imageLoader = {
    test  : /\.(gif|png|jpe?g)$/i,
    loader: 'file'
};

if (process.env.BABEL_ENV === 'development') {
    imageLoader.loader = `cache!${  imageLoader.loader }`;
}

module.exports = imageLoader;
