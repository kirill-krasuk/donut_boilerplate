/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path          = require('path');
const nodeExternals = require('webpack-node-externals');
const Dotenv        = require('dotenv-webpack');

const { getJsLoader }         = require('./loaders/js-loader');
const { getImageLoader }      = require('./loaders/image-loader');
const { getFontsLoader }      = require('./loaders/font-loader');
const { getCssLoader }        = require('./loaders/css-loader');
const { getSassLoader }       = require('./loaders/sass-loader');
const { getSVGLoader }        = require('./loaders/svg-loader');
const { getSassModuleLoader } = require('./loaders/sass-module-loader');

const PATHS = {
    enrty : path.resolve(__dirname, '..', 'server/index.ts'),
    output: path.resolve(__dirname, '..', 'dist')
};

module.exports = (env, argv) => ({
    mode   : argv.mode,
    target : 'node',
    entry  : PATHS.enrty,
    devtool: false,
    node   : {
        __dirname : true,
        __filename: false
    },
    output: {
        path         : PATHS.output,
        filename     : 'server.js',
        publicPath   : '/dist/',
        libraryTarget: 'commonjs2'
    },
    resolveLoader: {
        moduleExtensions: [ '-loader' ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.css',
            '.sass',
            '.scss',
            '.json'
        ],
    },
    module: {
        rules: [
            getJsLoader(false),
            getCssLoader(false),
            getSassLoader(false),
            getSassModuleLoader(false),
            getImageLoader(false),
            getSVGLoader(false),
            getFontsLoader(false)
        ]
    },
    externals: [ nodeExternals({
        whitelist: [
            /\.(eot|woff|woff2|ttf|otf)$/,
            /\.(svg|png|jpg|jpeg|gif|ico)$/,
            /\.(mp4|mp3|ogg|swf|webp)$/,
            /\.(css|scss|sass|sss|less)$/
        ].filter(x => x)
    }) ],
    plugins: [
        new Dotenv()
    ]
});
