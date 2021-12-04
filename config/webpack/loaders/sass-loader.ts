import ExtractCssChunks   from 'extract-css-chunks-webpack-plugin';
import { fileExtensions } from '../constants/files';

import { isProd }         from '../utils/isProd';

const options = {
    test   : fileExtensions.sass,
    exclude: fileExtensions.sassModule,
};

const useLoaders = [ {
    loader: isProd()
        ? ExtractCssChunks.loader
        : 'style-loader'
}, {
    loader: 'css-loader'
}, {
    loader: 'resolve-url-loader'
}, {
    loader : 'sass-loader',
    options: {
        sourceMap: !isProd()
    }
} ];

export function getClientSassLoader() {
    const sassLoader: Record<string, any> = {
        ...options,
        use: useLoaders
    };

    if (!isProd()) {
        sassLoader.use.unshift({
            loader : 'thread-loader',
            options: {
                workers           : 2,
                workerParallelJobs: 50,
            }
        }, {
            loader : 'cache-loader',
            options: {
                cacheDirectory: '.cache/sass-cache'
            }
        });
    }

    return sassLoader;
}

export const getServerSassLoader = () => ({
    ...options,
    use: useLoaders
});
