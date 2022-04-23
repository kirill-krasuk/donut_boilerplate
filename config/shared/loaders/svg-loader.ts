import svgToMiniDataURI     from 'mini-svg-data-uri';

import { fileExtensions }   from '../constants/files';
import { createHashHelper } from '../lib/webpack';
import { isProd }           from '../lib/env';

import type webpack         from 'webpack';

const addHash = createHashHelper(isProd());

function svgLoader(): webpack.RuleSetRule {
	return {
		test: fileExtensions.svgs,
		use : [
			!isProd() && {
				loader : 'cache-loader',
				options: {
					cacheDirectory: '.cache/svg-cache'
				}
			},

			{
				loader: '@svgr/webpack'
			},

			{
				loader : 'url-loader',
				options: {
					generator : (content: any) => svgToMiniDataURI(content.toString()),
					limit     : 4096,
					name      : addHash('[name].[ext]', 'contenthash:8'),
					outputPath: '../public/svgs/build',
					publicPath: '/public/svgs/build'
				}
			}
		].filter(Boolean) as webpack.RuleSetUseItem
	};
}

export { svgLoader };
