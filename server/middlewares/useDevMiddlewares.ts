import { Application }   from 'express';
import webpack           from 'webpack';
import DevMiddleware     from 'webpack-dev-middleware';
import HotMiddleware     from 'webpack-hot-middleware';

import config            from '@server/config';
import webpackConfigDev  from '../../config/webpack/webpack.dev';
import webpackConfigProd from '../../config/webpack/webpack.prod';

const { env } = config;

const webpackConfig = env === 'development' ? webpackConfigDev : webpackConfigProd;

const bundler = webpack(webpackConfig);

export function useDevMiddlewares(app: Application): void {
    if (env === 'development') {
        app.use(DevMiddleware(bundler, {
            publicPath: webpackConfig!.output!.publicPath,

            // writeToDisk: (name: string) => new RegExp(/(\.json|\.pug|sw\.js|manifest|svg)/, 'gi').test(name),
            writeToDisk: true,
        }));

        app.use(HotMiddleware(bundler));
    }
}
