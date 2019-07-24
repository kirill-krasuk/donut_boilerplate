const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getCssLoader(isClient = true) {
    const cssLoader = {
        test: /\.css$/,
    };

    if (isClient) {
        cssLoader.loader = [
            {
                loader : MiniCssExtractPlugin.loader,
                options: {
                    hmr      : process.env.NODE_ENV === 'development',
                    reloadAll: true
                },
            },
            'cache',
            'css',
        ];
    } else {
        cssLoader.loader = 'css';
    }

    return cssLoader;
}

module.exports = { getCssLoader };
