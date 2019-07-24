const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getSassLoader(isClient = true) {
    const sassLoader = {
        test   : /\.s(c|a)ss$/,
        exclude: /\.module\.(s(a|c)ss)$/,
    };

    if (isClient) {
        sassLoader.loader = [
            {
                loader : MiniCssExtractPlugin.loader,
                options: {
                    hmr      : process.env.NODE_ENV === 'development',
                    reloadAll: true
                },
            },
            'cache',
            'css',
            'resolve-url',
            {
                loader : 'sass',
                options: {
                    sourceMap: process.env.NODE_ENV === 'development'
                }
            }
        ];
    } else {
        sassLoader.loader = [
            'css',
            'resolve-url',
            {
                loader : 'sass',
                options: {
                    sourceMap: process.env.NODE_ENV === 'development'
                }
            }
        ];
    }

    return sassLoader;
}

module.exports = { getSassLoader };
