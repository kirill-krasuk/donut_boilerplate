const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getSassModuleLoader(isClient = true) {
    const sassModuleLoader = {
        test: /\.module\.s(c|a)ss$/,
    };

    if (isClient) {
        sassModuleLoader.loader = [
            {
                loader : MiniCssExtractPlugin.loader,
                options: {
                    hmr      : process.env.NODE_ENV === 'development',
                    reloadAll: true,
                },
            },
            'cache?cacheDirectory=.cache/sass-module-cache',
            'css?modules&localIdentName=[name]__[local]___[hash:base64:5]',
            'resolve-url',
            {
                loader : 'sass',
                options: {
                    sourceMap: process.env.NODE_ENV === 'development'
                }
            }
        ];
    } else {
        sassModuleLoader.loader = [
            'css?modules&exportOnlyLocals&localIdentName=[name]__[local]___[hash:base64:5]',
            'resolve-url',
            {
                loader : 'sass',
                options: {
                    sourceMap: process.env.NODE_ENV === 'development'
                }
            }
        ];
    }

    return sassModuleLoader;
}

module.exports = { getSassModuleLoader };
