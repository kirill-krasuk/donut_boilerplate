const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    test  : /\.css$/,
    loader: [
        {
            loader : MiniCssExtractPlugin.loader,
            options: {
                hmr      : process.env.NODE_ENV === 'development',
                reloadAll: true
            },
        },
        'cache',
        'css',
    ]
};
