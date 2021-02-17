import { Application } from 'express';
import webpack         from 'webpack';
import DevMiddleware   from 'webpack-dev-middleware';
import HotMiddleware   from 'webpack-hot-middleware';

import config          from '@server/config';
import webpackConfig   from '../../config/webpack/webpack.dev';

const { env, writeToDisk } = config;

export async function useDevMiddlewares(app: Application): Promise<void> {
    if (env === 'development') {
        const bundler = webpack(webpackConfig);

        app.use(DevMiddleware(bundler, {
            publicPath      : webpackConfig?.output?.publicPath,
            stats           : webpackConfig?.stats,
            serverSideRender: true,
            writeToDisk
        }));

        app.use(HotMiddleware(bundler));
    }
}
