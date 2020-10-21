import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { isProd }           from '../utils/isProd';

const options = {
    test: /\.module\.s(c|a)ss$/,
};

const commonLoaders = [ {
    loader : 'thread-loader',
    options: {
        workers           : 2,
        workerParallelJobs: 50,
    }
}, {
    loader : 'css-loader',
    options: {
        modules         : true,
        exportOnlyLocals: true,
        localIdentName  : '[name]__[local]___[hash:base64:5]',
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
        use: [
            {
                loader : MiniCssExtractPlugin.loader,
                options: {
                    hmr      : !isProd(),
                    reloadAll: true,
                },
            },
            ...commonLoaders
        ]
    };

    if (!isProd()) {
        sassModuleLoader.use.unshift({
            loader : 'cache-loader',
            options: {
                cacheDirectory: '.cache/sass-module-cache'
            }
        });
    }

    return sassModuleLoader;
}

export function getServerSassModuleLoader() {
    return {
        ...options,
        use: commonLoaders
    };
}
