import svgToMiniDataURI     from 'mini-svg-data-uri';

import { createHashHelper } from '../utils/createHashHelper';
import { isProd }           from '../utils/isProd';

const addHash = createHashHelper(isProd());

export const getSVGLoader = () => ({
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    use : [
        !isProd() && {
            loader : 'cache-loader',
            options: {
                cacheDirectory: '.cache/svg-cache'
            }
        },

        {
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
        }
    ].filter(Boolean)
});
