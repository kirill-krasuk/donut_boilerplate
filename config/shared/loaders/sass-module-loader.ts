import ExtractCssChunks          from 'mini-css-extract-plugin';

import { paths }                 from '../config/paths';
import { fileExtensions }        from '../constants/files';
import { isProd }                from '../lib/env';

import type webpack              from 'webpack';
import type { IsomorphicLoader } from '../types';

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

	const sourceMap = !isProd();

	const baseLoader = (isServer = false) => [
		{
			loader : 'css-loader',
			options: {
				modules: {
					localIdentName  : '[local]--[hash:base64:5]',
					exportOnlyLocals: isServer
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
		},
		{
			loader : 'sass-loader',
			options: {
				sourceMap
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

			...baseLoader()
		].filter(Boolean) as webpack.RuleSetUseItem,
		...extraOptions
	};

	const server = {
		...options,
		use: baseLoader(true)
	};

	return {
		client,
		server
	};
}

export { sassModuleLoader };
