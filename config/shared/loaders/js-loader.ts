/* eslint-disable unicorn/prefer-module */

import { fileExtensions } from '../constants/files';
import { isProd }         from '../lib/env';

import type webpack       from 'webpack';

const defaultProps = {
	enableThread: true,
	enableCache : true
};

type Props = Partial<typeof defaultProps>;

function jsLoader(props: Props = defaultProps): webpack.RuleSetRule {
	const { enableThread, enableCache } = {
		...defaultProps,
		...props
	};

	return {
		test: fileExtensions.js,
		use : [
			!isProd() &&
				enableCache && {
				loader : 'cache-loader',
				options: {
					cacheDirectory: '.cache/js-cache'
				}
			},

			enableThread && {
				loader : 'thread-loader',
				options: {
					workers           : 2,
					workerParallelJobs: 50
				}
			},

			{
				loader : require.resolve('babel-loader'),
				options: {
					compact: false
				}
			}
		].filter(Boolean) as webpack.RuleSetUseItem,
		exclude: [ fileExtensions.tests ]
	};
}

export { jsLoader };
