import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';

import { paths }        from '../constants/path';
import { isProd }       from '../utils/isProd';

export const getClientCssLoader = () => ({
    test: /\.css$/,
    use : [
        ...!isProd() && [ {
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
        } ],

        {
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
        }
    ].filter(Boolean)
});

export const getServerCssLoader = () => ({
    test  : /\.css$/,
    loader: 'css-loader'
});
