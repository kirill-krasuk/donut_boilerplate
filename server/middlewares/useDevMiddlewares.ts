import { Application }   from 'express';
import webpack           from 'webpack';
import DevMiddleware     from 'webpack-dev-middleware';
import HotMiddleware     from 'webpack-hot-middleware';

import config            from '@server/config';
import webpackConfigDev  from '../../webpack/webpack.dev';
import webpackConfigProd from '../../webpack/webpack.prod';

const { env } = config;

const webpackConfig = env === 'development' ? webpackConfigDev : webpackConfigProd;

const bundler = webpack(webpackConfig);

export function useDevMiddlewares(app: Application): void {
    if (env === 'development') {
        app.use(DevMiddleware(bundler, {
            publicPath : webpackConfig.output.publicPath,
            writeToDisk: (name: string) => {
                const regExp = new RegExp(/(\.json|sw\.js|manifest)/, 'gi');

                if (regExp.test(name)) {
                    return true;
                }

                return false;
            },
            stats: {
                all         : false,
                modules     : true,
                maxModules  : 0,
                errors      : true,
                warnings    : env === 'development',
                moduleTrace : true,
                errorDetails: true
            }
        }));

        app.use(HotMiddleware(bundler));
    }
}
