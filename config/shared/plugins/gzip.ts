import BrotliPlugin       from 'brotli-webpack-plugin';
import CompressionPlugin  from 'compression-webpack-plugin';

import { fileExtensions } from '../constants/files';

import type webpack       from 'webpack';

function gzipPlugins() {
	return [
		new CompressionPlugin({
			filename: '[file].gz[query]',
			test    : fileExtensions.staticFiles,
			minRatio: 0.8
		}),
		new BrotliPlugin({
			asset   : '[path].br[query]',
			test    : fileExtensions.staticFiles,
			minRatio: 0.8
		})
	] as webpack.WebpackPluginInstance[];
}

export { gzipPlugins };
