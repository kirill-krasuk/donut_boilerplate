const webpack = require('webpack');
const path    = require('path');

const CompressionPlugin        = require('compression-webpack-plugin');
const { InjectManifest }       = require('workbox-webpack-plugin');
const LoadablePlugin           = require('@loadable/webpack-plugin');
const Dotenv                   = require('dotenv-webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const UglifyJsPlugin           = require('uglifyjs-webpack-plugin');

const jsLoader   = require('./loaders/js-loader');
const cssLoader  = require('./loaders/css-loader');
const sassLoader = require('./loaders/sass-loader');

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
                chunkFilename: addHash('[name].js', 'hash:8'),
                path         : `${ paths.dist }`,
                filename     : addHash('[name].js', 'hash:8'),
                publicPath   : '/dist/',
            },
            devtool      : options.devtool || false,
            resolveLoader: {
                moduleExtensions: [ '-loader' ]
            },
            resolve: {
                extensions: [ '.js', '.jsx', '.css', '.sass', '.scss', '.json' ],
                alias     : {
                    'react-dom': isProd ? 'react-dom' : '@hot-loader/react-dom'
                }
            },
            optimization: {
                runtimeChunk: 'single',
                minimizer   : [ new UglifyJsPlugin({
                    parallel: true, // paralleling bundling process for speedup
                    cache   : true
                }) ],
                splitChunks: {
                    cacheGroups: {
                        vendor: {
                            test  : /[\\/]node_modules[\\/]/,
                            name  : 'vendors',
                            chunks: 'all'
                        },
                        commons: {
                            name     : 'commons',
                            chunks   : 'initial',
                            minChunks: 2
                        }
                    }
                }
            },
            module: {
                rules: [
                    jsLoader,
                    cssLoader,
                    sassLoader
                ]
            },
            watch  : options.watch || false,
            plugins: options.plugins.concat([
                new CompressionPlugin({
                    cache: true,
                    test : /\.js(\?.*)?$/i,
                }),
                new BundleAnalyzerPlugin({
                    openAnalyzer: false,
                    analyzerPort: 8181,
                    analyzerHost: '127.0.0.1'
                }),
                new InjectManifest({
                    swDest           : './sw.js',
                    importWorkboxFrom: 'cdn',
                    include          : /(hot-update)|(\.js(\.gz)?$)/,
                    swSrc            : './internals/sw-manifest.js',
                }),
                new Dotenv(),
                new LoadablePlugin(),
                new webpack.DefinePlugin({
                    'process.env': {
                        NODE_ENV: JSON.stringify(options.mode)
                    }
                }),
                new webpack.ContextReplacementPlugin(
                    /moment[/\\]locale$/,
                    /ru/
                )
            ])
        };
    }
};
