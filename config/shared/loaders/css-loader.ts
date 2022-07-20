import ExtractCssChunks          from 'mini-css-extract-plugin';

import { paths }                 from '../config/paths';
import { fileExtensions }        from '../constants/files';
import { isProd }                from '../lib/env';

import type webpack              from 'webpack';
import type { IsomorphicLoader } from '../types/index';

const options = {
	test: fileExtensions.css
};

const defaultProps = {
	enablePerf      : true,
	forceStyleLoader: false,
	extraOptions    : {}
};

const cacheLoader = {
	loader : 'cache-loader',
	options: {
		cacheDirectory: paths.caches.css
	}
};

type Props = Partial<typeof defaultProps>;

function cssLoader(props: Props = defaultProps): IsomorphicLoader {
	const { enablePerf, forceStyleLoader, extraOptions } = {
		...defaultProps,
		...props
	};

	const sourceMap = !isProd();

	const client = {
		...options,
		use: [
			...(!isProd() && enablePerf
				? [ cacheLoader ]
				: []),

			!forceStyleLoader && {
				loader: ExtractCssChunks.loader
			},

			forceStyleLoader && {
				loader: 'style-loader'
			},

			{
				loader : 'css-loader',
				options: {
					importLoaders: 1,
					sourceMap
				}
			},

			{
				loader : 'postcss-loader',
				options: {
					postcssOptions: {
						config: paths.client.postCssConfig
					},
					sourceMap
				}
			}
		].filter(Boolean) as webpack.RuleSetUseItem,
		...extraOptions,
		exclude: fileExtensions.cssModule
	};

	const server = {
		...options,
		loader : 'css-loader',
		exclude: fileExtensions.cssModule
	};

	return {
		client,
		server
	};
}

export { cssLoader };
