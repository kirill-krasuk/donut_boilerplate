import ExtractCssChunks          from 'mini-css-extract-plugin';

import { paths }                 from '../config/paths';
import { fileExtensions }        from '../constants/files';
import { isProd }                from '../lib/env';

import type webpack              from 'webpack';
import type { IsomorphicLoader } from '../types';

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

function cssModuleLoader(props: Props = defaultProps): IsomorphicLoader {
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
					modules      : {
						localIdentName: '[local]--[hash:base64:5]'
					},
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
		include: fileExtensions.cssModule
	};

	const server = {
		...options,
		loader : 'css-loader',
		options: {
			modules: {
				localIdentName  : '[local]--[hash:base64:5]',
				exportOnlyLocals: true
			}
		},
		include: fileExtensions.cssModule
	};

	return {
		client,
		server
	};
}

export { cssModuleLoader };
