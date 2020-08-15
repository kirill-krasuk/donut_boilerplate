const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { isProd } = require('../utils/isProd');

function getClientCssLoader() {
    const cssLoader = {
        test  : /\.css$/,
        loader: [ {
            loader : MiniCssExtractPlugin.loader,
            options: {
                hmr      : !isProd(),
                reloadAll: true
            },
        }, {
            loader: 'css'
        } ]
    };

    if (!isProd()) {
        cssLoader.loader.unshift({
            loader : 'cache',
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
        loader: 'css'
    };
}

module.exports = { getClientCssLoader, getServerCssLoader };
