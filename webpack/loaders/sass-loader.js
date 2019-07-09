const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sassLoader = {
    test   : /\.s(c|a)ss$/,
    exclude: /\.module\.(s(a|c)ss)$/,
    loader : [
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
    ]
};

module.exports = sassLoader;
