import { isProd }           from '../utils/isProd';
import { createHashHelper } from '../utils/createHashHelper';
import { fileExtensions }   from '../constants/files';

const addHash = createHashHelper(isProd());

const imageLoader: Record<string, any> = {
    test: fileExtensions.images,
    use : [ {
        loader : 'file-loader',
        options: {
            name      : addHash('[name].[ext]', 'contenthash:8'),
            outputPath: '../public/images/build',
            publicPath: '/public/images/build'
        }
    },
    {
        loader : 'image-webpack-loader',
        options: {
            mozjpeg: {
                progressive: true,
                quality    : 65
            },
            optipng: {
                enabled: isProd()
            },
            pngquant: {
                quality: [ 0.65, 0.90 ],
                speed  : 4
            },
            gifsicle: {
                interlaced: false
            }
        }
    } ]
};

export const getServerImageLoader = () => imageLoader;

export function getImageLoader() {
    if (!isProd()) {
        imageLoader.use.unshift({
            loader : 'cache-loader',
            options: {
                cacheDirectory: '.cache/images-cache'
            }
        });
    }

    return imageLoader;
}
