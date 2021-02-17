import webpack, { Configuration }    from 'webpack';
import path                          from 'path';
import { WebpackPnpExternals }       from 'webpack-pnp-externals';

import { getJsLoader }               from './loaders/js-loader';
import { getImageLoader }            from './loaders/image-loader';
import { getFontsLoader }            from './loaders/font-loader';
import { getServerCssLoader }        from './loaders/css-loader';
import { getServerSassLoader }       from './loaders/sass-loader';
import { getSVGLoader }              from './loaders/svg-loader';
import { getServerSassModuleLoader } from './loaders/sass-module-loader';
import { isProd }                    from './utils/isProd';
import { getEnvs }                   from './utils/getEnvs';

const PATHS = {
    entry : path.resolve(__dirname, '../..', 'server/index.ts'),
    output: path.resolve(__dirname, '../..', 'dist')
};

const mode = process.env.NODE_ENV as 'development' | 'production' || 'development';

const serverConfig: Configuration = {
    mode,
    target: 'node',
    entry : PATHS.entry,
    node  : {
        __dirname : true,
        __filename: false
    },
    output: {
        path      : PATHS.output,
        filename  : 'server.js',
        publicPath: '/dist/',
    },
    cache: !isProd()
        ? {
            type          : 'filesystem',
            name          : 'server-cache',
            cacheDirectory: path.resolve(__dirname, '../../.cache')
        }
        : false,
    stats  : 'summary',
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.css',
            '.sass',
            '.json'
        ],
        symlinks        : false,
        cacheWithContext: false,
    },
    module: {
        rules: [
            getJsLoader(),
            getServerCssLoader(),
            getServerSassLoader(),
            getServerSassModuleLoader(),
            getImageLoader(),
            getSVGLoader(),
            getFontsLoader()
        ]
    },
    externals: [ WebpackPnpExternals() ],
    plugins  : [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(mode), ...getEnvs() }
        }),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
    ]
};

export default serverConfig;
