import webpack, { Configuration } from 'webpack';
import { WebpackPnpExternals }    from 'webpack-pnp-externals';

import { jsLoader }               from '../shared/loaders/js-loader';
import { imageLoader }            from '../shared/loaders/image-loader';
import { fontsLoader }            from '../shared/loaders/font-loader';
import { cssLoader }              from '../shared/loaders/css-loader';
import { cssModuleLoader }        from '../shared/loaders/css-module-loader';
import { sassLoader }             from '../shared/loaders/sass-loader';
import { svgLoader }              from '../shared/loaders/svg-loader';
import { sassModuleLoader }       from '../shared/loaders/sass-module-loader';
import { paths }                  from '../shared/constants/paths';
import { tsconfigPathsPlugin }    from '../shared/plugins/tsconfig-paths';
import { withSpeedMeasurePlugin } from '../shared/plugins/speed-measure';
import { definePlugin }           from '../shared/plugins/define';
import { isProd }                 from '../shared/lib/env';

const __IS_CLIENT__ = false;
const __IS_SERVER__ = true;

const mode = (process.env.NODE_ENV as 'development' | 'production') || 'development';

function getCacheOptions(): webpack.FileCacheOptions | boolean {
	if (!isProd()) {
		return {
			type          : 'filesystem',
			name          : 'server-cache',
			cacheDirectory: paths.cacheDir,
		};
	}

	return false;
}

const config: Configuration = {
	mode,
	target: 'node',
	entry : paths.server.entry,
	node  : {
		__dirname : true,
		__filename: false,
	},
	output: {
		path    : paths.server.output,
		filename: 'server.js',
	},
	cache  : getCacheOptions(),
	stats  : 'summary',
	resolve: {
		extensions      : [ '.ts', '.tsx', '.js', '.css', '.sass', '.json' ],
		symlinks        : false,
		cacheWithContext: false,
		plugins         : [ tsconfigPathsPlugin() ],
	},
	module: {
		rules: [
			jsLoader(),
			cssLoader().server,
			cssModuleLoader().server,
			sassLoader().server,
			sassModuleLoader().server,
			imageLoader().server,
			svgLoader(),
			fontsLoader(),
		],
	},
	externals: [ WebpackPnpExternals() ],
	plugins  : [
		definePlugin({
			mode,
			isClient: false,
		}),
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1,
		}),
	],
};

export { __IS_CLIENT__, __IS_SERVER__ };

export default withSpeedMeasurePlugin(config, false);
