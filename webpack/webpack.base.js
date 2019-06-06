const webpack = require('webpack');
const path    = require('path');

const HtmlPlugin               = require('html-webpack-plugin');
const HtmlPugPlugin            = require('html-webpack-pug-plugin');
const HtmlHardDiskPlugin       = require('html-webpack-harddisk-plugin');
const CompressionPlugin        = require('compression-webpack-plugin');
const WorkboxPlugin            = require('workbox-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const paths = {
    src     : path.resolve('src'),
    dist    : path.resolve('dist'),
    entry   : path.resolve('src', 'core', 'index.jsx'),
    template: path.resolve('src', 'core', 'templates', 'index.pug'),
    view    : path.resolve('views', 'index.pug')
};

module.exports = {
    paths,
    configureBundler(options) {
        const isProd = options.mode === 'production';

        function addHash(template, hash) {
            return isProd
                ? template.replace(/\.[^.]+$/, `.[${ hash }]$&`)
                : template;
        }

        return {
            context: path.resolve(__dirname, '..'),
            mode   : options.mode,
            entry  : options.entry,
            output : {
                path      : `${ paths.dist  }/js`,
                filename  : addHash('[name].js', 'hash:8'),
                publicPath: '/dist/',
            },
            devtool      : options.devtool || false,
            resolveLoader: {
                moduleExtensions: [ '-loader' ]
            },
            resolve: {
                extensions: [ '.js', '.jsx', '.css', '.sass', '.scss', '.json' ],
                alias     : {
                    'react-dom': '@hot-loader/react-dom'
                }
            },
            optimization: {
                runtimeChunk: 'single',
                splitChunks : {
                    cacheGroups: {
                        vendor: {
                            test  : /[\\/]node_modules[\\/]/,
                            name  : 'vendors',
                            chunks: 'all'
                        }
                    }
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
            watch  : options.watch || false,
            plugins: options.plugins.concat([
                new HtmlPlugin({
                    template         : paths.template,
                    filename         : paths.view,
                    alwaysWriteToDisk: true
                }),
                new HtmlHardDiskPlugin(),
                new HtmlPugPlugin(),
                new CompressionPlugin({
                    cache: true,
                    test : /\.js(\?.*)?$/i
                }),
                new webpack.DefinePlugin({
                    NODE_ENV: JSON.stringify(options.mode)
                }),
                new CircularDependencyPlugin({
                    onStart() {
                        console.log('! start detecting circular dependency !');
                    },
                    onDetected({ paths, compilation }) {
                        compilation.errors.push(new Error(paths.join(' -> ')));
                    },
                    onEnd() {
                        console.log('! end detecting circular dependency   !');
                    },
                    failOnError: true
                }),
                new WorkboxPlugin.GenerateSW({
                    clientsClaim: true,
                    skipWaiting : true
                })
            ])
        };
    }
};
