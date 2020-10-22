import { isProd }           from '../utils/isProd';
import { createHashHelper } from '../utils/createHashHelper';

const addHash = createHashHelper(isProd());

export function getFontsLoader() {
    const fontsLoader: Record<string, any> = {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use : [ {
            loader : 'file-loader',
            options: {
                name      : addHash('[name].[ext]', 'contenthash:8'),
                outputPath: '../public/fonts/build',
                publicPath: '/public/fonts/build',
            }
        } ]
    };

    if (!isProd()) {
        fontsLoader.use.unshift({
            loader : 'cache-loader',
            options: {
                cacheDirectory: '.cache/fonts-cache'
            }
        });
    }

    return fontsLoader;
}
