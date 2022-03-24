import webpack              from 'webpack';
import ExtractCssChunks     from 'mini-css-extract-plugin';

import { IsomorphicLoader } from '../types';
import { fileExtensions }   from '../constants/files';
import { isProd }           from '../lib/env';

const options = {
    test: fileExtensions.sassModule,
};

const defaultProps = {
    enablePerf      : true,
    forceStyleLoader: false,
    extraOptions    : {}
};

type Props = Partial<typeof defaultProps>

export function sassModuleLoader(props: Props = defaultProps): IsomorphicLoader {
    const {
        enablePerf,
        forceStyleLoader,
        extraOptions
    } = { ...defaultProps, ...props };

    const baseLoader = [ {
        loader : 'css-loader',
        options: {
            modules: {
                localIdentName: '[local]--[hash:base64:5]'
            }
        }
    }, {
        loader: 'resolve-url-loader',
    },  {
        loader : 'sass-loader',
        options: {
            sourceMap: true
        }
    } ];

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
                        cacheDirectory: '.cache/sass-module-cache'
                    }
                },
            ] : [],

            !forceStyleLoader && {
                loader: isProd()
                    ? ExtractCssChunks.loader
                    : 'style-loader'
            },

            forceStyleLoader && {
                loader: 'style-loader'
            },

            ...baseLoader,
        ].filter(Boolean) as webpack.RuleSetUseItem,
        ...extraOptions
    };

    const server = {
        ...options,
        use: baseLoader
    };

    return { client, server };
}
