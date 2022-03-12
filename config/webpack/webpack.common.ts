import webpack                         from 'webpack';
import { InjectManifest }              from 'workbox-webpack-plugin';
import { CleanWebpackPlugin }          from 'clean-webpack-plugin';
import LoadablePlugin                  from '@loadable/webpack-plugin';
import ExtractCssChunks                from 'extract-css-chunks-webpack-plugin';
import HtmlWebpackPlugin               from 'html-webpack-plugin';
import HtmlHardDiskPlugin              from 'html-webpack-harddisk-plugin';
import HtmlPugPlugin                   from 'html-webpack-pug-plugin';
import { HtmlWebpackSkipAssetsPlugin } from 'html-webpack-skip-assets-plugin';
import ImageminWebpWebpackPlugin       from 'imagemin-webp-webpack-plugin';
import SpeedMeasurePlugin              from 'speed-measure-webpack-plugin';

import { paths }                       from './constants/path';
import { getJsLoader }                 from './loaders/js-loader';
import { getImageLoader }              from './loaders/image-loader';
import { getFontsLoader }              from './loaders/font-loader';
import { getClientCssLoader }          from './loaders/css-loader';
import { getClientSassLoader }         from './loaders/sass-loader';
import { getClientSassModuleLoader }   from './loaders/sass-module-loader';
import { getSVGLoader }                from './loaders/svg-loader';
import { getEnvs }                     from './utils/getEnvs';
import { createHashHelper }            from './utils/createHashHelper';

// use smp.wrap on config object
const smp = new SpeedMeasurePlugin();

export const __IS_CLIENT__ = true;
export const __IS_SERVER__ = false;

const contentHash = 'contenthash:8';

const useSpeedMeasure = JSON.parse(process.env.USE_SPEED_MEASURE_CLIENT || 'false');

export function configureBundler(options: webpack.Configuration): webpack.Configuration {
    const isProd = options.mode === 'production';

    const addHash = createHashHelper(isProd);

    const serviceWorkerEnabled = JSON.parse(process.env.SERVICE_WORKER_ENABLE as unknown as string);

    const config: webpack.Configuration = {
        context: paths.context,
        target : 'browserslist',
        mode   : options.mode,
        entry  : options.entry,
        output : {
            chunkFilename: addHash('[name].js', contentHash),
            path         : `${ paths.client.dist }`,
            filename     : addHash('[name].js', contentHash),
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

                // for css import, url and etc usage resources alias
                fonts : paths.client.fonts,
                images: paths.client.images,
                svgs  : paths.client.svgs
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
            serviceWorkerEnabled && new InjectManifest({
                swDest : './sw.js',
                include: [ '**/*.js', '**/*.js.gz' ],
                exclude: [ '**/*.hot-update.json' ],
                swSrc  : './core/client/service-worker.js',
            }),
            new ImageminWebpWebpackPlugin({
                config: [ {
                    test   : /\.(jpe?g|png|gif)/,
                    options: {
                        quality: 75
                    }
                } ],
                overrideExtension: true,
                detailedLogs     : false,
                silent           : true,
                strict           : true
            }),
            new HtmlWebpackSkipAssetsPlugin(), // for excludeAssets
            new HtmlWebpackPlugin({
                template         : paths.client.template,
                filename         : paths.client.view,
                alwaysWriteToDisk: true,

                /* force disable minification for
                 correctly building pug file
                 because indentation matters */
                minify       : false,
                excludeAssets: [ /\.(js|css)/ ]
            }),
            new HtmlHardDiskPlugin(), // for alwaysWriteToDisk
            new HtmlPugPlugin({
                adjustIndent: true
            }),
            new ExtractCssChunks({
                filename     : addHash('[name].css', contentHash),
                chunkFilename: addHash('[id].css', contentHash),
            }),
            new LoadablePlugin(),
            new webpack.DefinePlugin({
                'process.env': { NODE_ENV: JSON.stringify(options.mode), ...getEnvs() },
                __IS_DEV__   : options.mode === 'development',
                __IS_PROD__  : options.mode === 'production',
                __IS_SERVER__,
                __IS_CLIENT__
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
                    '!index.pug'
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

    return useSpeedMeasure
        ? smp.wrap(config)
        : config;
}
