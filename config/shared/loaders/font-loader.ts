import { isProd }           from '../lib/env';
import { createHashHelper } from '../lib/webpack';
import { fileExtensions }   from '../constants/files';

import type webpack         from 'webpack';

const addHash = createHashHelper(isProd());

export const fontsLoader = (): webpack.RuleSetRule => ({
	test     : fileExtensions.fonts,
	type     : 'asset/resource',
	generator: {
		filename: addHash('../public/fonts/build/[name].[ext][query]', 'contenthash:8'),
	},
	use: [
		!isProd() && {
			loader : 'cache-loader',
			options: {
				cacheDirectory: '.cache/fonts-cache',
			},
		},
	].filter(Boolean) as webpack.RuleSetUseItem,
});
