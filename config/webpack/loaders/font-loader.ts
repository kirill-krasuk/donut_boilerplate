import { isProd }           from '../utils/isProd';
import { createHashHelper } from '../utils/createHashHelper';

const addHash = createHashHelper(isProd());

export const getFontsLoader = () => ({
    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
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
