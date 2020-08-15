/* eslint-disable @typescript-eslint/no-var-requires */
const webpack                        = require('webpack');
const path                           = require('path');
const { InjectManifest }             = require('workbox-webpack-plugin');
const { CleanWebpackPlugin }         = require('clean-webpack-plugin');
const LoadablePlugin                 = require('@loadable/webpack-plugin');
const Dotenv                         = require('dotenv-webpack');
const MiniCssExtractPlugin           = require('mini-css-extract-plugin');
const HtmlPlugin                     = require('html-webpack-plugin');
const HtmlHardDiskPlugin             = require('html-webpack-harddisk-plugin');
const HtmlPugPlugin                  = require('html-webpack-pug-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const ImageminWebpWebpackPlugin      = require('imagemin-webp-webpack-plugin');

const { getJsLoader }               = require('./loaders/js-loader');
const { getImageLoader }            = require('./loaders/image-loader');
const { getFontsLoader }            = require('./loaders/font-loader');
const { getClientCssLoader }        = require('./loaders/css-loader');
const { getClientSassLoader }       = require('./loaders/sass-loader');
const { getClientSassModuleLoader } = require('./loaders/sass-module-loader');
const { getSVGLoader }              = require('./loaders/svg-loader');
const { collectEnvVars }            = require('./utils/collectEnvVars');
const { createHashHelper }          = require('./utils/createHashHelper');

const paths = {
    src     : path.resolve('src'),
    dist    : path.resolve('dist'),
    entry   : path.resolve('src/core/index.tsx'),
    template: path.resolve('src/core/template/index.pug'),
    view    : path.resolve('dist/index.pug')
};

const context = path.resolve(__dirname, '..');

module.exports = {
    paths,
    configureBundler(options) {
        const isProd = options.mode === 'production';

        const addHash = createHashHelper(isProd);

        return {
            context,
            mode  : options.mode,
            entry : options.entry,
            output: {
                chunkFilename: addHash('[name].js', 'contenthash:8'),
                path         : `${ paths.dist }`,
                filename     : addHash('[name].js', 'contenthash:8'),
                publicPath   : '/dist/',
                pathinfo     : false,
            },
            devtool      : options.devtool || false,
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
                alias: {
                    'react-dom': isProd ? 'react-dom' : '@hot-loader/react-dom',
                    'fp-ts/lib': 'fp-ts/es6' // use import in app from lib
                }
            },
            optimization: {
                runtimeChunk: 'single',
                minimize    : options.minimize || false,
                minimizer   : options.minimizer,
                splitChunks : {
                    cacheGroups: {
                        reactVendor: {
                            test              : /(react|redux)/g,
                            name              : 'react-vendors',
                            chunks            : 'initial',
                            reuseExistingChunk: true,
                            priority          : 40
                        },
                        vendors: {
                            test              : /[\\/]node_modules[\\/]/,
                            name              : 'vendors',
                            chunks            : 'initial',
                            reuseExistingChunk: true,
                            priority          : 30
                        }
                    }
                }
            },
            module: {
                rules: [
                    getJsLoader(),
                    getClientCssLoader(),
                    getClientSassLoader(),
                    getClientSassModuleLoader(),
                    getImageLoader(),
                    getFontsLoader(),
                    getSVGLoader()
                ]
            },
            watch  : options.watch || false,
            plugins: options.plugins.concat([
                new ImageminWebpWebpackPlugin({
                    config: [ {
                        test   : /\.(jpe?g|png)/,
                        options: {
                            quality: 75
                        }
                    } ],
                    overrideExtension: true,
                    detailedLogs     : false,
                    silent           : false,
                    strict           : true
                }),
                new InjectManifest({
                    swDest           : './sw.js',
                    importWorkboxFrom: 'cdn',
                    include          : /(\.js(\.gz)?$)/,
                    swSrc            : `./internals/sw-manifest.${ options.mode }.js`,
                }),
                new HtmlPlugin({
                    template         : paths.template,
                    filename         : paths.view,
                    alwaysWriteToDisk: true,
                    excludeAssets    : [ /\.(js|css)/ ]
                }),
                new HtmlWebpackExcludeAssetsPlugin(), // for excludeAssets
                new HtmlHardDiskPlugin(), // for alwaysWriteToDisk
                new HtmlPugPlugin(),
                new MiniCssExtractPlugin({
                    filename     : addHash('[name].css', 'contenthash:8'),
                    chunkFilename: addHash('[id].css', 'contenthash:8'),
                }),
                new LoadablePlugin(),
                new webpack.DefinePlugin({
                    'process.env': { NODE_ENV: JSON.stringify(options.mode), ...collectEnvVars() }
                }),
                new Dotenv(),
                new webpack.ContextReplacementPlugin(
                    /moment[/\\]locale$/,
                    /ru/
                ),
                new CleanWebpackPlugin({
                    cleanOnceBeforeBuildPatterns: [
                        '**/*',
                        '!server.js',
                        '!*.server.js',
                    ],
                    cleanAfterEveryBuildPatterns: [
                        '!*.server.js',
                        '*.hot-update.json',
                        'precache-manifest.*.js'
                    ],
                }),
            ])
        };
    }
};
