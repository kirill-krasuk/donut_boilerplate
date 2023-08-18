import webpack                     from 'webpack';
import dotenv                      from 'dotenv';

import { Mode }                    from '../enums/mode';
import { getEnvironmentVariables } from '../lib/env';

const { parsed } = dotenv.config();

type Options = {
	mode: Mode,
	isClient: boolean
};

function definePlugin(options: Options) {
	const { mode, isClient } = options;

	const environmentVariables = {
		NODE_ENV: JSON.stringify(mode),
		...getEnvironmentVariables(parsed)
	};

	return new webpack.DefinePlugin({
		'process.env': environmentVariables,
		__IS_DEV__   : mode === Mode.Development,
		__IS_PROD__  : mode === Mode.Production,
		__IS_SERVER__: !isClient,
		__IS_CLIENT__: isClient
	});
}

export { definePlugin };
