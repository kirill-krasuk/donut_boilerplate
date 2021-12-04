import ExtractCssChunks   from 'extract-css-chunks-webpack-plugin';

import { fileExtensions } from '../constants/files';
import { paths }          from '../constants/path';
import { isProd }         from '../utils/isProd';

export const getClientCssModuleLoader = () => ({
    test: fileExtensions.cssModule,
    use : [
        ...!isProd() ? [ {
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
        } ] : [],

        {
            loader: isProd()
                ? ExtractCssChunks.loader
                : 'style-loader'
        }, {
            loader : 'css-loader',
            options: {
                modules: {
                    localIdentName: '[local]--[hash:base64:5]'
                }
            }
        }, {
            loader : 'postcss-loader',
            options: {
                postcssOptions: {
                    config: paths.client.postCssConfig
                },
            },
        }
    ]
});

export const getServerCssModuleLoader = () => ({
    test  : fileExtensions.cssModule,
    loader: 'css-loader'
});
