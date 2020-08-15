const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { isProd } = require('../utils/isProd');

const options = {
    test: /\.module\.s(c|a)ss$/,
};

const commonLoaders = [ {
    loader : 'css',
    options: {
        modules         : true,
        exportOnlyLocals: true,
        localIdentName  : '[name]__[local]___[hash:base64:5]',
    }
}, {
    loader: 'resolve-url',
},  {
    loader : 'sass',
    options: {
        sourceMap: !isProd()
    }
} ];

function getClientSassModuleLoader() {
    const sassModuleLoader = {
        ...options,
        loader: [
            {
                loader : MiniCssExtractPlugin.loader,
                options: {
                    hmr      : !isProd(),
                    reloadAll: true,
                },
            },
            ...commonLoaders
        ]
    };

    if (!isProd()) {
        sassModuleLoader.loader.unshift({
            loader : 'cache',
            options: {
                cacheDirectory: '.cache/sass-module-cache'
            }
        });
    }

    return sassModuleLoader;
}

function getServerSassModuleLoader() {
    return {
        ...options,
        loader: commonLoaders
    };
}

module.exports = { getClientSassModuleLoader, getServerSassModuleLoader };
