import { Application }              from 'express';
import webpack                      from 'webpack';
import DevMiddleware                from 'webpack-dev-middleware';
import HotMiddleware                from 'webpack-hot-middleware';

import { env }                      from '@env/index';
import { headers }                  from '@server/constants/headers';
import { createCompilationPromise } from '@server/utils/createCompilationPromise';
import webpackConfig                from '../../config/webpack/webpack.dev';

const { writeToDisk } = env.server;

const fileExtensionsToWrite = /\.(jpe?g|webp|png|svg|gif|ttf|otf|woff|woff2)$/;
const filesToWrite          = [ 'sw.js' ];

export function useDevMiddlewares(app: Application) {
    const { sw, isCacheable } = headers;

    const [ swKey, swValue ]                   = sw;
    const [ isCacheableKey, isCacheableValue ] = isCacheable;

    const compiler = webpack(webpackConfig);

    app.use(DevMiddleware(compiler, {
        publicPath      : webpackConfig.output?.publicPath,
        stats           : webpackConfig.stats,
        serverSideRender: true,
        headers         : {
            [swKey]         : [ swValue ],
            [isCacheableKey]: [ isCacheableValue ]
        },
        writeToDisk: writeToDisk ||
        ((filePath: string) => fileExtensionsToWrite.test(filePath) ||
            filesToWrite.some((file) => filePath.endsWith(file))
        )

    }));

    app.use(HotMiddleware(compiler));

    return createCompilationPromise(compiler);
}
