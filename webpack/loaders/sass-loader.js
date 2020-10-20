const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { isProd } = require('../utils/isProd');

const options = {
    test   : /\.s(c|a)ss$/,
    exclude: /\.module\.(s(a|c)ss)$/,
};

const commonLoaders = [ {
    loader: 'css-loader'
}, {
    loader: 'resolve-url-loader'
}, {
    loader : 'sass-loader',
    options: {
        sourceMap: !isProd()
    }
} ];

function getClientSassLoader() {
    const sassLoader = {
        ...options,
        use: [  {
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
        sassLoader.use.unshift({
            loader : 'cache-loader',
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
        use: commonLoaders
    };
}

module.exports = { getClientSassLoader, getServerSassLoader };
