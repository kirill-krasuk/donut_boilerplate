import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';

import { paths }        from '../constants/path';
import { isProd }       from '../utils/isProd';

export function getClientCssLoader() {
    const cssLoader: Record<string, any> = {
        test: /\.css$/,
        use : [ {
            loader: isProd()
                ? ExtractCssChunks.loader
                : 'style-loader'
        }, {
            loader: 'css-loader'
        }, {
            loader : 'postcss-loader',
            options: {
                postcssOptions: {
                    config: paths.postCssConfig
                },
            },
        } ]
    };

    if (!isProd()) {
        cssLoader.use.unshift({
            loader : 'thread-loader',
            options: {
                workers           : 2,
                workerParallelJobs: 50,
            }
        }, {
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
