import webpack              from 'webpack';
import ExtractCssChunks     from 'extract-css-chunks-webpack-plugin';

import { createHashHelper } from '../lib/webpack';

export function extractCssPlugin({ isProd }: { isProd: boolean }) {
    const addHash = createHashHelper(isProd);

    return new ExtractCssChunks({
        filename     : addHash('[name].css', 'contenthash:8'),
        chunkFilename: addHash('[id].css', 'contenthash:8'),
    }) as webpack.WebpackPluginInstance;
}
