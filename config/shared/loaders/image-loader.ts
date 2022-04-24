import { paths }                 from '../config/paths';
import { fileExtensions }        from '../constants/files';
import { isProd }                from '../lib/env';
import { createHashHelper }      from '../lib/webpack';

import type webpack              from 'webpack';
import type { IsomorphicLoader } from '../types';

const addHash = createHashHelper(isProd());

const options = {
	test: fileExtensions.images
};

function imageLoader(): IsomorphicLoader {
	const baseLoader = [
		{
			loader : 'file-loader',
			options: {
				name      : addHash('[name].[ext]', 'contenthash:8'),
				outputPath: paths.imagesBuild,
				publicPath: paths.imagesPublic
			}
		},
		{
			loader : 'image-webpack-loader',
			options: {
				mozjpeg: {
					progressive: true,
					quality    : 65
				},
				optipng: {
					enabled: isProd()
				},
				pngquant: {
					quality: [ 0.65, 0.9 ],
					speed  : 4
				},
				gifsicle: {
					interlaced: false
				}
			}
		}
	];

	const client = {
		...options,
		use: [
			!isProd() && {
				loader : 'cache-loader',
				options: {
					cacheDirectory: '.cache/images-cache'
				}
			},

			...baseLoader
		].filter(Boolean) as webpack.RuleSetUseItem
	};

	const server = {
		...options,
		use: baseLoader
	};

	return {
		client,
		server
	};
}

export { imageLoader };
