import webpack              from 'webpack';

import { isProd }           from '../lib/env';
import { createHashHelper } from '../lib/webpack';
import { fileExtensions }   from '../constants/files';

const addHash = createHashHelper(isProd());

export const fontsLoader = (): webpack.RuleSetRule => ({
    test: fileExtensions.fonts,
    use : [
        !isProd() && {
            loader : 'cache-loader',
            options: {
                cacheDirectory: '.cache/fonts-cache'
            }
        },

        {
            loader : 'file-loader',
            options: {
                name      : addHash('[name].[ext]', 'contenthash:8'),
                outputPath: '../public/fonts/build',
                publicPath: '/public/fonts/build',
            }
        }
    ].filter(Boolean) as webpack.RuleSetUseItem
});
