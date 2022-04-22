import { paths }            from '../shared/constants/paths';
import { gzipPlugins }      from '../shared/plugins/gzip';
import { minimizerPlugins } from '../shared/plugins/minimizer';
import { configureBundler } from './webpack.common';

export default configureBundler({
	mode : 'production',
	entry: {
		bundle: [ `${ paths.client.entry }` ]
	},
	stats      : 'detailed',
	performance: {
		hints            : false,
		maxEntrypointSize: 512_000,
		maxAssetSize     : 512_000
	},
	optimization: {
		minimize   : true,
		minimizer  : minimizerPlugins(),
		splitChunks: {
			chunks     : 'all',
			cacheGroups: {
				defaultVendors: {
					test              : /.yarn/,
					filename          : 'vendors.[contenthash:8].js',
					chunks            : 'initial',
					reuseExistingChunk: true
				}
			}
		}
	},
	plugins: gzipPlugins()
});
