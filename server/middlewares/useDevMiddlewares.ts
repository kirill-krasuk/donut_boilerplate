import { Application } from 'express';
import webpack         from 'webpack';
import DevMiddleware   from 'webpack-dev-middleware';
import HotMiddleware   from 'webpack-hot-middleware';

import env             from '@env/';
import { headers }     from '@server/constants/headers';
import webpackConfig   from '../../config/webpack/webpack.dev';

const { writeToDisk } = env.server;

const fileExtensionsToWrite = /\.(jpe?g|webp|png|svg|gif|ttf|otf|woff|woff2)$/;

export function useDevMiddlewares(app: Application): void {
    const { sw, isCacheable } = headers;

    const [ swKey, swValue ]                   = sw;
    const [ isCacheableKey, isCacheableValue ] = isCacheable;

    const bundler = webpack(webpackConfig);

    app.use(DevMiddleware(bundler, {
        publicPath      : webpackConfig?.output?.publicPath,
        stats           : webpackConfig?.stats,
        serverSideRender: true,
        headers         : {
            [swKey]         : [ swValue ],
            [isCacheableKey]: [ isCacheableValue ]
        },
        writeToDisk: writeToDisk || ((filePath: string) => fileExtensionsToWrite.test(filePath))
    }));

    app.use(HotMiddleware(bundler));
}
