import { Configuration, WebpackPluginInstance } from 'webpack';
import path                                     from 'path';
import nodeExternals                            from 'webpack-node-externals';
import Dotenv                                   from 'dotenv-webpack';

import { getJsLoader }                          from './loaders/js-loader';
import { getImageLoader }                       from './loaders/image-loader';
import { getFontsLoader }                       from './loaders/font-loader';
import { getServerCssLoader }                   from './loaders/css-loader';
import { getServerSassLoader }                  from './loaders/sass-loader';
import { getSVGLoader }                         from './loaders/svg-loader';
import { getServerSassModuleLoader }            from './loaders/sass-module-loader';
import { isProd }                               from './utils/isProd';

const PATHS = {
    entry : path.resolve(__dirname, '../..', 'server/index.ts'),
    output: path.resolve(__dirname, '../..', 'dist')
};

const serverConfig = (_, argv): Configuration => ({
    mode  : argv.mode,
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
    stats  : false,
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
    externals: [ nodeExternals({
        allowlist: [
            /\.(eot|woff|woff2|ttf|otf)$/,
            /\.(svg|png|jpg|jpeg|gif|ico)$/,
            /\.(mp4|mp3|ogg|swf|webp)$/,
            /\.(css|scss|sass|sss|less)$/
        ].filter(Boolean)
    }) ],
    plugins: [
        new Dotenv() as WebpackPluginInstance
    ]
});

export default serverConfig;
