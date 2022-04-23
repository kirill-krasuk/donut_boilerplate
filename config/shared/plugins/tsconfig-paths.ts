import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

import { paths }               from '../constants/paths';

function tsconfigPathsPlugin() {
	return new TsconfigPathsPlugin({
		configFile: paths.tsconfig
	});
}

export { tsconfigPathsPlugin };
