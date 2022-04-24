import svgToMiniDataURI     from 'mini-svg-data-uri';

import { paths }            from '../config/paths';
import { fileExtensions }   from '../constants/files';
import { isProd }           from '../lib/env';
import { createHashHelper } from '../lib/webpack';

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
					outputPath: paths.svgBuild,
					publicPath: paths.svgPublic
				}
			}
		].filter(Boolean) as webpack.RuleSetUseItem
	};
}

export { svgLoader };
