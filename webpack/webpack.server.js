const path          = require('path');
const nodeExternals = require('webpack-node-externals');
const Dotenv        = require('dotenv-webpack');

const { getJsLoader }               = require('./loaders/js-loader');
const { getImageLoader }            = require('./loaders/image-loader');
const { getFontsLoader }            = require('./loaders/font-loader');
const { getServerCssLoader }        = require('./loaders/css-loader');
const { getServerSassLoader }       = require('./loaders/sass-loader');
const { getSVGLoader }              = require('./loaders/svg-loader');
const { getServerSassModuleLoader } = require('./loaders/sass-module-loader');

const PATHS = {
    entry : path.resolve(__dirname, '..', 'server/index.ts'),
    output: path.resolve(__dirname, '..', 'dist')
};

module.exports = (env, argv) => ({
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
        new Dotenv()
    ]
});
