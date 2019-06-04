
const webpack = require('webpack');
const path    = require('path');

const HtmlWebpackPlugin    = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

const PATHS = {
    src : path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

module.exports = function (env) {
    const isProd = env === 'production';
    const isDev  = env === 'development';

    function addHash(template, hash) {
        return isProd
            ? template.replace(/\.[^.]+$/, `.[${ hash }]$&`)
            : template;
    }

    return {
        mode : env,
        entry: {
            bundle: [ `${ PATHS.src }/index.jsx`, 'webpack-hot-middleware/client' ],
        },
        output: {
            path      : PATHS.dist,
            filename  : addHash('js/[name].js', 'hash:8'),
            publicPath: '/dist/'
        },
        devtool      : isDev && 'eval',
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
                test   : /\.jsx$/,
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
                template: path.join(PATHS.src, 'index.pug'),
                filename: path.resolve(__dirname, 'views', 'index.pug')
            }),
            new HtmlWebpackPugPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    };
};
