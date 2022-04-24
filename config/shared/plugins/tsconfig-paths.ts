import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

import { paths }               from '../config/paths';

const tsconfigPathsPlugin = () =>
	new TsconfigPathsPlugin({
		configFile: paths.tsconfig
	});

export { tsconfigPathsPlugin };
