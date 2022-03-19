import webpack              from 'webpack';
import ExtractCssChunks     from 'extract-css-chunks-webpack-plugin';

import { paths }            from '../constants/paths';
import { fileExtensions }   from '../constants/files';
import { isProd }           from '../lib/env';
import { IsomorphicLoader } from '../types/index';

const options = {
    test: fileExtensions.css,
};

const defaultProps = {
    enablePerf      : true,
    forceStyleLoader: false,
    extraOptions    : {}
};

type Props = Partial<typeof defaultProps>

export function cssLoader(props: Props = defaultProps): IsomorphicLoader {
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
                    importLoaders: 1
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
        exclude: fileExtensions.cssModule
    };

    const server = {
        ...options,
        loader : 'css-loader',
        exclude: fileExtensions.cssModule
    };

    return { client, server };
}
