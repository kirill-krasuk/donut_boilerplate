import LoadablePlugin             from '@loadable/webpack-plugin';
import { CleanWebpackPlugin }     from 'clean-webpack-plugin';
import ImageminWebpWebpackPlugin  from 'imagemin-webp-webpack-plugin';
import webpack                    from 'webpack';
import { InjectManifest }         from 'workbox-webpack-plugin';

import { paths }                  from '../shared/config/paths';
import { fileExtensions }         from '../shared/constants/files';
import { Mode }                   from '../shared/enums/mode';
import { createHashHelper }       from '../shared/lib/webpack';
import { cssLoader }              from '../shared/loaders/css-loader';
import { cssModuleLoader }        from '../shared/loaders/css-module-loader';
import { fontsLoader }            from '../shared/loaders/font-loader';
import { imageLoader }            from '../shared/loaders/image-loader';
import { jsLoader }               from '../shared/loaders/js-loader';
import { sassLoader }             from '../shared/loaders/sass-loader';
import { sassModuleLoader }       from '../shared/loaders/sass-module-loader';
import { svgLoader }              from '../shared/loaders/svg-loader';
import { analyzerPlugin }         from '../shared/plugins/analyzer';
import { definePlugin }           from '../shared/plugins/define';
import { extractCssPlugin }       from '../shared/plugins/extract-css';
import { htmlPlugins }            from '../shared/plugins/html';
import { withSpeedMeasurePlugin } from '../shared/plugins/speed-measure';
import { tsconfigPathsPlugin }    from '../shared/plugins/tsconfig-paths';

const __IS_CLIENT__ = true;
const __IS_SERVER__ = false;

const contentHash = 'contenthash:8';

function configureBundler(options: webpack.Configuration): webpack.Configuration {
	const isProd = options.mode === Mode.Production;

	const _mode = options.mode as Mode;

	const addHash = createHashHelper(isProd);

	const serviceWorkerEnabled = JSON.parse(process.env.SERVICE_WORKER_ENABLE as unknown as string);

	const config: webpack.Configuration = {
		context: paths.context,
		target : options.target || `browserslist:${ paths.browserslist }`,
		mode   : options.mode,
		entry  : options.entry,
		output : {
			chunkFilename: addHash('[name].js', contentHash),
			path         : paths.client.dist,
			filename     : addHash('[name].js', contentHash),
			publicPath   : paths.public,
			pathinfo     : false
		},
		...(options.devtool && {
			devtool: options.devtool
		}),
		resolve: {
			extensions      : [ '.ts', '.tsx', '.js', '.css', '.sass', '.json' ],
			symlinks        : false,
			cacheWithContext: false,
			alias           : {
				'fp-ts/lib': 'fp-ts/es6', // use import in app from lib

				// for css import, url and etc usage resources alias
				fonts : paths.client.fonts,
				images: paths.client.images,
				svgs  : paths.client.svgs
			},
			plugins: [ tsconfigPathsPlugin() ]
		},
		...(options.cache && {
			cache: options.cache
		}),
		...(options.experiments && {
			experiments: options.experiments
		}),
		optimization: {
			runtimeChunk: 'single',
			...options.optimization
		},
		stats: options.stats,
		...(options.performance && {
			performance: options.performance
		}),
		module: {
			unsafeCache: true,
			rules      : [
				jsLoader(),
				cssLoader().client,
				cssModuleLoader().client,
				sassLoader().client,
				sassModuleLoader().client,
				imageLoader().client,
				fontsLoader(),
				svgLoader()
			]
		},
		watch  : options.watch || false,
		plugins: options.plugins!.concat(
			[
				...htmlPlugins(),
				definePlugin({
					mode    : _mode,
					isClient: true
				}),
				extractCssPlugin({ isProd }),
				analyzerPlugin(_mode),
				serviceWorkerEnabled &&
					new InjectManifest({
						swDest : paths.swDest,
						include: [ '**/*.js', '**/*.js.gz' ],
						exclude: [ '**/*.hot-update.json' ],
						swSrc  : paths.swSrc
					}),
				new ImageminWebpWebpackPlugin({
					config: [
						{
							test   : fileExtensions.images,
							options: {
								quality: 75
							}
						}
					],
					overrideExtension: true,
					detailedLogs     : false,
					silent           : true,
					strict           : true
				}),
				new LoadablePlugin(),
				new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
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
					]
				})
			].filter(Boolean)
		)
	};

	return withSpeedMeasurePlugin(config);
}

export { __IS_CLIENT__, __IS_SERVER__, configureBundler };
