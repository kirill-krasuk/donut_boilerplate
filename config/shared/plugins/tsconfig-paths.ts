import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

import { paths }               from '../constants/paths';

export function tsconfigPathsPlugin() {
	return new TsconfigPathsPlugin({
		configFile: paths.tsconfig,
	});
}
