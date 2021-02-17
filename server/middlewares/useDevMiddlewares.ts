import { Application } from 'express';
import webpack         from 'webpack';
import DevMiddleware   from 'webpack-dev-middleware';
import HotMiddleware   from 'webpack-hot-middleware';

import config          from '@server/config';
import webpackConfig   from '../../config/webpack/webpack.dev';

const { writeToDisk } = config;

export async function useDevMiddlewares(app: Application): Promise<void> {
    if (__IS_DEV__) {
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
