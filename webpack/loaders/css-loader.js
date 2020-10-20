const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { isProd } = require('../utils/isProd');

function getClientCssLoader() {
    const cssLoader = {
        test: /\.css$/,
        use : [ {
            loader : MiniCssExtractPlugin.loader,
            options: {
                hmr      : !isProd(),
                reloadAll: true
            },
        }, {
            loader: 'css-loader'
        } ]
    };

    if (!isProd()) {
        cssLoader.use.unshift({
            loader : 'cache-loader',
            options: {
                cacheDirectory: '.cache/css-cache'
            }
        });
    }

    return cssLoader;
}

function getServerCssLoader() {
    return {
        test  : /\.css$/,
        loader: 'css-loader'
    };
}

module.exports = { getClientCssLoader, getServerCssLoader };
