const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sassModuleLoader = {
    test  : /\.module\.s(c|a)ss$/,
    loader: [
        {
            loader : MiniCssExtractPlugin.loader,
            options: {
                hmr      : process.env.NODE_ENV === 'development',
                reloadAll: true,
            },
        },
        'cache',
        'css?modules&localIdentName=[name]__[local]___[hash:base64:5]',
        'resolve-url',
        {
            loader : 'sass',
            options: {
                sourceMap: process.env.NODE_ENV === 'development'
            }
        }
    ]
};

module.exports = sassModuleLoader;
