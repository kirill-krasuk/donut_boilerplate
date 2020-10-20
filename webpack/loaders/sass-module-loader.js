const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { isProd } = require('../utils/isProd');

const options = {
    test: /\.module\.s(c|a)ss$/,
};

const commonLoaders = [ {
    loader : 'css-loader',
    options: {
        modules         : true,
        exportOnlyLocals: true,
        localIdentName  : '[name]__[local]___[hash:base64:5]',
    }
}, {
    loader: 'resolve-url-loader',
},  {
    loader : 'sass-loader',
    options: {
        sourceMap: !isProd()
    }
} ];

function getClientSassModuleLoader() {
    const sassModuleLoader = {
        ...options,
        use: [
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
        sassModuleLoader.use.unshift({
            loader : 'cache-loader',
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
        use: commonLoaders
    };
}

module.exports = { getClientSassModuleLoader, getServerSassModuleLoader };
