import webpack                     from 'webpack';

import { getEnvironmentVariables } from '../lib/env';

type Options = {
	mode: 'development' | 'none' | 'production',
	isClient: boolean
};

function definePlugin({ mode, isClient }: Options) {
	const _mode = mode === 'none'
		? 'development'
		: mode;

	const environmentVariables = {
		NODE_ENV: JSON.stringify(mode),
		...getEnvironmentVariables()
	};

	return new webpack.DefinePlugin({
		'process.env': environmentVariables,
		__IS_DEV__   : _mode === 'development',
		__IS_PROD__  : _mode === 'production',
		__IS_SERVER__: !isClient,
		__IS_CLIENT__: isClient
	});
}

export { definePlugin };
