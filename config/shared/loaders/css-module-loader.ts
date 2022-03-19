import webpack              from 'webpack';
import ExtractCssChunks     from 'extract-css-chunks-webpack-plugin';

import { fileExtensions }   from '../constants/files';
import { paths }            from '../constants/paths';
import { IsomorphicLoader } from '../types';
import { isProd }           from '../lib/env';

const options = {
    test: fileExtensions.css
};

const defaultProps = {
    enablePerf      : true,
    forceStyleLoader: false,
    extraOptions    : {}
};

type Props = Partial<typeof defaultProps>

export const cssModuleLoader = (props: Props = defaultProps): IsomorphicLoader => {
    const {
        enablePerf,
        forceStyleLoader,
        extraOptions
    } = { ...defaultProps, ...props };

    const client = {
        ...options,
        use: [
            ...!isProd() && enablePerf ? [
                {
                    loader : 'thread-loader',
                    options: {
                        workers           : 2,
                        workerParallelJobs: 50,
                    }
                },

                {
                    loader : 'cache-loader',
                    options: {
                        cacheDirectory: paths.caches.css
                    }
                }
            ] : [],

            !forceStyleLoader && {
                loader: isProd()
                    ? ExtractCssChunks.loader
                    : 'style-loader'
            },

            forceStyleLoader && {
                loader: 'style-loader'
            },

            {
                loader : 'css-loader',
                options: {
                    importLoaders: 1,
                    modules      : {
                        localIdentName: '[local]--[hash:base64:5]'
                    }
                }
            },

            {
                loader : 'postcss-loader',
                options: {
                    postcssOptions: {
                        config: paths.client.postCssConfig
                    },
                },
            }
        ].filter(Boolean) as webpack.RuleSetUseItem,
        ...extraOptions,
        include: fileExtensions.cssModule
    };

    const server = {
        ...options,
        loader : 'css-loader',
        include: fileExtensions.cssModule
    };

    return { client, server };
};
