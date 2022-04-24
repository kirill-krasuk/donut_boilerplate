import { paths }            from '../config/paths';
import { fileExtensions }   from '../constants/files';
import { isProd }           from '../lib/env';
import { createHashHelper } from '../lib/webpack';

import type webpack         from 'webpack';

const addHash = createHashHelper(isProd());

function fontsLoader(): webpack.RuleSetRule {
	return {
		test     : fileExtensions.fonts,
		type     : 'asset/resource',
		generator: {
			filename: addHash(`${ paths.fontsBuild }/[name].[ext][query]`, 'contenthash:8')
		},
		use: [
			!isProd() && {
				loader : 'cache-loader',
				options: {
					cacheDirectory: '.cache/fonts-cache'
				}
			}
		].filter(Boolean) as webpack.RuleSetUseItem
	};
}

export { fontsLoader };
