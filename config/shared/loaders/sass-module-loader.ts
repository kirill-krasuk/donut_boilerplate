import ExtractCssChunks          from 'mini-css-extract-plugin';

import { fileExtensions }        from '../constants/files';
import { isProd }                from '../lib/env';

import type { IsomorphicLoader } from '../types';
import type webpack              from 'webpack';

const options = {
	test: fileExtensions.sassModule
};

const defaultProps = {
	enablePerf      : true,
	forceStyleLoader: false,
	extraOptions    : {}
};

const cacheLoader = {
	loader : 'cache-loader',
	options: {
		cacheDirectory: '.cache/sass-module-cache'
	}
};

type Props = Partial<typeof defaultProps>;

function sassModuleLoader(props: Props = defaultProps): IsomorphicLoader {
	const { enablePerf, forceStyleLoader, extraOptions } = {
		...defaultProps,
		...props
	};

	const baseLoader = [
		{
			loader : 'css-loader',
			options: {
				modules: {
					localIdentName: '[local]--[hash:base64:5]'
				}
			}
		},
		{
			loader: 'resolve-url-loader'
		},
		{
			loader : 'sass-loader',
			options: {
				sourceMap: true
			}
		}
	];

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

			...baseLoader
		].filter(Boolean) as webpack.RuleSetUseItem,
		...extraOptions
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

export { sassModuleLoader };
