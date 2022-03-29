import webpack              from 'webpack';
import ExtractCssChunks     from 'mini-css-extract-plugin';

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
                    loader : 'cache-loader',
                    options: {
                        cacheDirectory: paths.caches.css
                    }
                }
            ] : [],

            !forceStyleLoader && {
                loader: ExtractCssChunks.loader
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
                    },
                    sourceMap: !isProd()
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
