const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { isProd } = require('../utils/isProd');

const options = {
    test   : /\.s(c|a)ss$/,
    exclude: /\.module\.(s(a|c)ss)$/,
};

const commonLoaders = [ {
    loader: 'css'
}, {
    loader: 'resolve-url'
}, {
    loader : 'sass',
    options: {
        sourceMap: !isProd()
    }
} ];

function getClientSassLoader() {
    const sassLoader = {
        ...options,
        loader: [  {
            loader : MiniCssExtractPlugin.loader,
            options: {
                hmr      : !isProd(),
                reloadAll: true
            },
        },
        ...commonLoaders
        ]
    };

    if (!isProd()) {
        sassLoader.loader.unshift({
            loader : 'cache',
            options: {
                cacheDirectory: '.cache/sass-cache'
            }
        });
    }

    return sassLoader;
}

function getServerSassLoader() {
    return {
        ...options,
        loader: commonLoaders
    };
}

module.exports = { getClientSassLoader, getServerSassLoader };
