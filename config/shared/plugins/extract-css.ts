import ExtractCssChunks     from 'mini-css-extract-plugin';

import { createHashHelper } from '../lib/webpack';

import type webpack         from 'webpack';

function extractCssPlugin({ isProd }: { isProd: boolean }) {
	const addHash = createHashHelper(isProd);

	return new ExtractCssChunks({
		filename     : addHash('[name].css', 'contenthash:8'),
		chunkFilename: addHash('[name].css', 'contenthash:8')
	}) as webpack.WebpackPluginInstance;
}

export { extractCssPlugin };
