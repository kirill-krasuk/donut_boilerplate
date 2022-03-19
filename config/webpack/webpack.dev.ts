import webpack                   from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin  from 'circular-dependency-plugin';
import WebpackNotifierPlugin     from 'webpack-notifier';

import { configureBundler }      from './webpack.common';
import { paths }                 from '../shared/constants/paths';

export default configureBundler({
    mode : 'development',
    entry: {
        bundle: [
            paths.client.entry,
            'webpack-hot-middleware/client'
        ]
    },
    cache: {
        type          : 'filesystem',
        name          : 'dev-client-cache',
        cacheDirectory: paths.cacheDir
    },
    devtool     : 'eval-cheap-module-source-map',
    optimization: {
        usedExports           : true,
        emitOnErrors          : true,
        removeAvailableModules: false,
        removeEmptyChunks     : false,
        splitChunks           : false,
    },
    ignoreWarnings: [ /deprecationwarning/i ],
    stats         : process.env.WEBPACK_DEV_STATS || 'none',
    watch         : true,
    plugins       : [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin({
            overlay: {
                // integration with webpack-hot-middleware
                sockIntegration: 'whm',
            },
        }) as any,
        new WebpackNotifierPlugin({
            title: process.env.APP_NAME || 'Webpack',
            emoji: true,
        }),
        new CircularDependencyPlugin({
            onDetected({ paths, compilation }) {
                compilation.errors.push((new Error(paths.join(' -> ')) as any));
            },
            failOnError: true
        }),
    ].filter(Boolean)
});
