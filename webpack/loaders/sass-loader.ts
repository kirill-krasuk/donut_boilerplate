import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { isProd }           from '../utils/isProd';

const options = {
    test   : /\.s(c|a)ss$/,
    exclude: /\.module\.(s(a|c)ss)$/,
};

const commonLoaders = [ {
    loader: 'css-loader'
}, {
    loader: 'resolve-url-loader'
}, {
    loader : 'sass-loader',
    options: {
        sourceMap: !isProd()
    }
} ];

export function getClientSassLoader() {
    const sassLoader: Record<string, any> = {
        ...options,
        use: [  {
            loader : MiniCssExtractPlugin.loader,
            options: {
                hmr      : !isProd(),
                reloadAll: true
            },
        },
        ...commonLoaders
        ]
    };

    if (!isProd()) {
        sassLoader.use.unshift({
            loader : 'cache-loader',
            options: {
                cacheDirectory: '.cache/sass-cache'
            }
        });
    }

    return sassLoader;
}

export function getServerSassLoader() {
    return {
        ...options,
        use: commonLoaders
    };
}
