import webpack              from 'webpack';
import ExtractCssChunks     from 'extract-css-chunks-webpack-plugin';

import { fileExtensions }   from '../constants/files';
import { isProd }           from '../lib/env';
import { IsomorphicLoader } from '../types';

const options = {
    test   : fileExtensions.sass,
    exclude: fileExtensions.sassModule,
};

const defaultProps = {
    enablePerf      : true,
    forceStyleLoader: false,
    extraOptions    : {}
};

type Props = Partial<typeof defaultProps>

export function sassLoader(props: Props = defaultProps): IsomorphicLoader {
    const {
        enablePerf,
        forceStyleLoader,
        extraOptions
    } = { ...defaultProps, ...props };

    const baseLoader = [ {
        loader: 'css-loader'
    }, {
        loader: 'resolve-url-loader'
    }, {
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
                        cacheDirectory: '.cache/sass-cache'
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

            ...baseLoader
        ].filter(Boolean) as webpack.RuleSetUseItem,
        ...extraOptions
    };

    const server = {
        ...options,
        use: baseLoader
    };

    return { client, server };
}