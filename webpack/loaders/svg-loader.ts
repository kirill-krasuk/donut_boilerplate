import svgToMiniDataURI     from 'mini-svg-data-uri';

import { createHashHelper } from '../utils/createHashHelper';
import { isProd }           from '../utils/isProd';

const addHash = createHashHelper(isProd());

export function getSVGLoader() {
    const SVGLoader: Record<string, any> = {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use : [ {
            loader: '@svgr/webpack'
        }, {
            loader : 'url-loader',
            options: {
                generator : (content: any) => svgToMiniDataURI(content.toString()),
                limit     : 4096,
                name      : addHash('[name].[ext]', 'contenthash:8'),
                outputPath: '../public/svgs/build',
                publicPath: '/public/svgs/build'
            },
        } ]
    };

    if (!isProd()) {
        SVGLoader.use.unshift({
            loader : 'cache-loader',
            options: {
                cacheDirectory: '.cache/svg-cache'
            }
        });
    }

    return SVGLoader;
}
