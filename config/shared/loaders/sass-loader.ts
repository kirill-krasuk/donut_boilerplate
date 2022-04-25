import ExtractCssChunks          from 'mini-css-extract-plugin';

import { paths }                 from '../config/paths';
import { fileExtensions }        from '../constants/files';
import { isProd }                from '../lib/env';

import type webpack              from 'webpack';
import type { IsomorphicLoader } from '../types';

const options = {
	test   : fileExtensions.sass,
	exclude: fileExtensions.sassModule
};

const defaultProps = {
	enablePerf      : true,
	forceStyleLoader: false,
	extraOptions    : {}
};

const cacheLoader = {
	loader : 'cache-loader',
	options: {
		cacheDirectory: '.cache/sass-cache'
	}
};

type Props = Partial<typeof defaultProps>;

function sassLoader(props: Props = defaultProps): IsomorphicLoader {
	const { enablePerf, forceStyleLoader, extraOptions } = {
		...defaultProps,
		...props
	};

	const baseLoader = [
		{
			loader: 'css-loader'
		},
		{
			loader: 'resolve-url-loader'
		},
		{
			loader : 'postcss-loader',
			options: {
				postcssOptions: {
					config: paths.client.postCssConfig
				}
			}
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

export { sassLoader };
