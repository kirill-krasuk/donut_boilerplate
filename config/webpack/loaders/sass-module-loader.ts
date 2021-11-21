import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';

import { isProd }       from '../utils/isProd';

const options = {
    test: /\.modules?\.s(c|a)ss$/,
};

const commonLoaders = [ {
    loader : 'css-loader',
    options: {
        modules: true
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
        use: commonLoaders
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
    use: commonLoaders
});
