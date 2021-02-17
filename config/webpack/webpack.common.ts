import webpack                         from 'webpack';
import path                            from 'path';
import { InjectManifest }              from 'workbox-webpack-plugin';
import { CleanWebpackPlugin }          from 'clean-webpack-plugin';
import LoadablePlugin                  from '@loadable/webpack-plugin';
import MiniCssExtractPlugin            from 'mini-css-extract-plugin';
import HtmlWebpackPlugin               from 'html-webpack-plugin';
import HtmlHardDiskPlugin              from 'html-webpack-harddisk-plugin';
import HtmlPugPlugin                   from 'html-webpack-pug-plugin';
import { HtmlWebpackSkipAssetsPlugin } from 'html-webpack-skip-assets-plugin';
import ImageminWebpWebpackPlugin       from 'imagemin-webp-webpack-plugin';

import { getJsLoader }                 from './loaders/js-loader';
import { getImageLoader }              from './loaders/image-loader';
import { getFontsLoader }              from './loaders/font-loader';
import { getClientCssLoader }          from './loaders/css-loader';
import { getClientSassLoader }         from './loaders/sass-loader';
import { getClientSassModuleLoader }   from './loaders/sass-module-loader';
import { getSVGLoader }                from './loaders/svg-loader';
import { getEnvs }                     from './utils/getEnvs';
import { createHashHelper }            from './utils/createHashHelper';

const context = path.resolve(__dirname, '../..');

export const paths = {
    src     : path.resolve('src'),
    dist    : path.resolve('dist'),
    entry   : path.resolve('src/core/index.tsx'),
    template: path.resolve('src/core/index.pug'),
    view    : path.resolve('dist/index.pug')
};

export function configureBundler(options: webpack.Configuration): webpack.Configuration {
    const isProd = options.mode === 'production';

    const addHash = createHashHelper(isProd);

    const serviceWorkerEnabled = JSON.parse(process.env.SERVICE_WORKER_ENABLE as string);

    const config: webpack.Configuration = {
        context,
        target: 'browserslist',
        mode  : options.mode,
        entry : options.entry,
        output: {
            chunkFilename: addHash('[name].js', 'contenthash:8'),
            path         : `${ paths.dist }`,
            filename     : addHash('[name].js', 'contenthash:8'),
            publicPath   : '/dist/',
            pathinfo     : false,
        },
        ...(options.devtool && {
            devtool: options.devtool
        }),
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
            alias           : {
                'fp-ts/lib': 'fp-ts/es6', // use import in app from lib
            }
        },
        ...(options.cache && {
            cache: options.cache
        }),
        optimization: {
            runtimeChunk: 'single',
            ...options.optimization,
        },
        stats: options.stats,
        ...(options.performance && {
            performance: options.performance
        }),
        module: {
            unsafeCache: true,
            rules      : [
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
        plugins: options!.plugins!.concat([
            new ImageminWebpWebpackPlugin({
                config: [ {
                    test   : /\.(jpe?g|png)/,
                    options: {
                        quality: 75
                    }
                } ],
                overrideExtension: true,
                detailedLogs     : false,
                silent           : true,
                strict           : true
            }),
            serviceWorkerEnabled && new InjectManifest({
                swDest : './sw.js',
                include: [ '**/*.js', '**/*.js.gz' ],
                exclude: [ '**/*.hot-update.json' ],
                swSrc  : './src/core/service-worker.js',
            }),
            new HtmlWebpackSkipAssetsPlugin(), // for excludeAssets
            new HtmlWebpackPlugin({
                template         : paths.template,
                filename         : paths.view,
                alwaysWriteToDisk: true,
                excludeAssets    : [ /\.(js|css)/ ]
            }),
            new HtmlHardDiskPlugin(), // for alwaysWriteToDisk
            new HtmlPugPlugin(),
            new MiniCssExtractPlugin({
                filename     : addHash('[name].css', 'contenthash:8'),
                chunkFilename: addHash('[id].css', 'contenthash:8'),
            }),
            new LoadablePlugin(),
            new webpack.DefinePlugin({
                'process.env': { NODE_ENV: JSON.stringify(options.mode), ...getEnvs() },
                __IS_DEV__   : options.mode === 'development',
                __IS_PROD__  : options.mode === 'production',
                __IS_SERVER__: false,
                __IS_CLIENT__: true
            }),
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
                    '!index.pug',
                    'precache-manifest.*.js'
                ],
            }),
        ]).filter(Boolean)
    };

    return config;
}
