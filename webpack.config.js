
const webpack = require('webpack');
const path    = require('path');

const HtmlWebpackPlugin         = require('html-webpack-plugin');
const HtmlWebpackPugPlugin      = require('html-webpack-pug-plugin');
const HtmlWebpackHardDiskPlugin = require('html-webpack-harddisk-plugin');

const PATHS = {
    src     : path.resolve(__dirname, 'src'),
    dist    : path.resolve(__dirname, 'dist'),
    entry   : path.resolve(__dirname, 'src', 'core', 'index.jsx'),
    template: path.resolve(__dirname, 'src', 'core', 'templates', 'index.pug'),
    view    : path.resolve(__dirname, 'views', 'index.pug')
};


module.exports = function ({ env, debug }) {
    const isProd = env === 'production';
    const isDev  = env === 'development';

    const isDebug = JSON.parse(debug);

    function addHash(template, hash) {
        return isProd
            ? template.replace(/\.[^.]+$/, `.[${ hash }]$&`)
            : template;
    }

    return {
        mode : env,
        entry: {
            bundle: [
                `${ PATHS.entry }`,
                'webpack-hot-middleware/client'
            ],
            vendor: [
                'react',
                'react-dom'
            ]
        },
        output: {
            path      : PATHS.dist,
            filename  : addHash('js/[name].js', 'hash:8'),
            publicPath: '/dist/'
        },
        devtool      : isDev && isDebug && 'eval-source-map',
        resolveLoader: {
            moduleExtensions: [ '-loader' ]
        },
        resolve: {
            extensions: [ '.js', '.jsx', '.css', '.sass', '.scss', '.json' ],
            alias     : {
                'react-dom': '@hot-loader/react-dom'
            }
        },
        module: {
            rules: [ {
                test   : /\.jsx?$/,
                exclude: /node_modules/,
                loader : 'babel'
            }, {
                test  : /\.css$/,
                loader: 'style!css',
            }, {
                test  : /\.(scss|sass)$/,
                loader: 'style!css!resolve-url!sass?sourceMap'
            } ]
        },
        watch  : isDev,
        plugins: [
            new HtmlWebpackPlugin({
                template         : PATHS.template,
                filename         : PATHS.view,
                alwaysWriteToDisk: true
            }),
            new HtmlWebpackHardDiskPlugin(),
            new HtmlWebpackPugPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    };
};
