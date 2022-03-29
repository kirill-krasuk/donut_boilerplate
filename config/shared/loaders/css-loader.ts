import webpack              from 'webpack';
import ExtractCssChunks     from 'mini-css-extract-plugin';

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
                    sourceMap    : !isProd()
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
