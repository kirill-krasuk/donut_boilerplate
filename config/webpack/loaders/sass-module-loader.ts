import ExtractCssChunks   from 'extract-css-chunks-webpack-plugin';
import { fileExtensions } from '../constants/files';

import { isProd }         from '../utils/isProd';

const options = {
    test: fileExtensions.sassModule,
};

const useLoaders = [ {
    loader : 'css-loader',
    options: {
        modules: {
            localIdentName: '[local]--[hash:base64:5]'
        }
    }
}, {
    loader: 'resolve-url-loader',
},  {
    loader : 'sass-loader',
    options: {
        sourceMap: !isProd()
    }
} ];

export function getClientSassModuleLoader() {
    const sassModuleLoader: Record<string, any> = {
        ...options,
        use: useLoaders
    };

    if (!isProd()) {
        sassModuleLoader.use.unshift({
            loader : 'thread-loader',
            options: {
                workers           : 2,
                workerParallelJobs: 50,
            }
        }, {
            loader : 'cache-loader',
            options: {
                cacheDirectory: '.cache/sass-module-cache'
            }
        }, {
            loader: 'style-loader'
        });
    } else {
        sassModuleLoader.use.unshift({
            loader: ExtractCssChunks.loader,
        });
    }

    return sassModuleLoader;
}

export const getServerSassModuleLoader = () => ({
    ...options,
    use: useLoaders
});
