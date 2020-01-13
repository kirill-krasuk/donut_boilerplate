const webpack       = require('webpack');
const DevMiddleware = require('webpack-dev-middleware');
const HotMiddleware = require('webpack-hot-middleware');

const webpackConfigDev  = require('../../webpack/webpack.dev');
const webpackConfigProd = require('../../webpack/webpack.prod');
const config            = require('../config').default;

const { env } = config;

const webpackConfig = env === 'development' ? webpackConfigDev : webpackConfigProd;

const bundler = webpack(webpackConfig);

export function useDevMiddlewares(app) {
    if (env === 'development') {
        app.use(DevMiddleware(bundler, {
            publicPath : webpackConfig.output.publicPath,
            writeToDisk: true,
            stats      : {
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
