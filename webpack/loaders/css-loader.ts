import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { isProd }           from '../utils/isProd';

export function getClientCssLoader() {
    const cssLoader: Record<string, any> = {
        test: /\.css$/,
        use : [ {
            loader : 'thread-loader',
            options: {
                workers           : 2,
                workerParallelJobs: 50,
            }
        }, {
            loader : MiniCssExtractPlugin.loader,
            options: {
                hmr      : !isProd(),
                reloadAll: true
            },
        }, {
            loader: 'css-loader'
        } ]
    };

    if (!isProd()) {
        cssLoader.use.unshift({
            loader : 'cache-loader',
            options: {
                cacheDirectory: '.cache/css-cache'
            }
        });
    }

    return cssLoader;
}

export function getServerCssLoader() {
    return {
        test  : /\.css$/,
        loader: 'css-loader'
    };
}
