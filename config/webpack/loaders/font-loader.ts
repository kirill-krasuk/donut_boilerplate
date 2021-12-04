import { isProd }           from '../utils/isProd';
import { createHashHelper } from '../utils/createHashHelper';
import { fileExtensions }   from '../constants/files';

const addHash = createHashHelper(isProd());

export const getFontsLoader = () => ({
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
    ].filter(Boolean)
});
