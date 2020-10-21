import { isProd }           from '../utils/isProd';
import { createHashHelper } from '../utils/createHashHelper';

const addHash = createHashHelper(isProd());

export function getImageLoader() {
    const imageLoader: Record<string, any> = {
        test: /\.(gif|png|jpe?g)$/i,
        use : [
            {
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
                        enabled: process.env.NODE_ENV === 'production'
                    },
                    pngquant: {
                        quality: [ 0.65, 0.90 ],
                        speed  : 4
                    },
                    gifsicle: {
                        interlaced: false
                    }
                }
            }
        ]
    };

    if (isProd()) {
        imageLoader.use.unshift({
            loader : 'cache-loader',
            options: {
                cacheDirectory: '.cache/images-cache'
            }
        });
    }

    return imageLoader;
}
