import ReactRefreshWebpackPlugin     from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin      from 'circular-dependency-plugin';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
import webpack                       from 'webpack';
import WebpackNotifierPlugin         from 'webpack-notifier';

import { paths }                     from '../shared/config/paths';
import { Mode }                      from '../shared/enums/mode';
import { configureBundler }          from './webpack.common';

export default configureBundler({
	mode : Mode.Development,
	entry: {
		bundle: [ paths.client.entry, 'webpack-hot-middleware/client' ]
	},
	cache: {
		type          : 'filesystem',
		name          : 'dev-client-cache',
		cacheDirectory: paths.cacheDir
	},
	devtool     : 'eval-cheap-module-source-map',
	optimization: {
		usedExports           : true,
		emitOnErrors          : true,
		removeAvailableModules: false,
		removeEmptyChunks     : false,
		splitChunks           : false
	},
	ignoreWarnings: [ /deprecationwarning/i ],
	stats         : process.env.WEBPACK_DEV_STATS || 'none',
	watch         : true,
	plugins       : [
		new webpack.HotModuleReplacementPlugin(),
		new ReactRefreshWebpackPlugin({
			overlay: {
				// integration with webpack-hot-middleware
				sockIntegration: 'whm'
			}
		}) as any,
		new WebpackNotifierPlugin({
			title: process.env.APP_NAME || 'Webpack',
			emoji: true
		}),
		new CircularDependencyPlugin({
			onDetected({ paths, compilation }) {
				compilation.errors.push(new Error(paths.join(' -> ')) as any);
			},
			failOnError: true
		}),
		new DuplicatePackageCheckerPlugin({
			verbose: true,
			exclude(instance) {
				return instance.name === 'react-is';
			}
		})
	].filter(Boolean)
});
