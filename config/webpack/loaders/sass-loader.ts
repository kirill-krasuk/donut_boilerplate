import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';

import { isProd }       from '../utils/isProd';

const options = {
    test   : /\.s(c|a)ss$/,
    exclude: /\.modules?\.(s(a|c)ss)$/,
};

const useLoaders = [ {
    loader: isProd()
        ? ExtractCssChunks.loader
        : 'style-loader'
}, {
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
        use: useLoaders
    };

    if (!isProd()) {
        sassLoader.use.unshift({
            loader : 'thread-loader',
            options: {
                workers           : 2,
                workerParallelJobs: 50,
            }
        }, {
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
        use: useLoaders
    };
}
