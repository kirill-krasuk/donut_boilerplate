import webpack                   from 'webpack';
import { BundleAnalyzerPlugin }  from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin  from 'circular-dependency-plugin';
import WebpackNotifierPlugin     from 'webpack-notifier';

import { configureBundler }      from './webpack.common';
import { paths }                 from './constants/path';

export default configureBundler({
    mode : 'development',
    entry: {
        bundle: [
            `${ paths.client.entry }`,
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
    stats  : 'errors-warnings',
    watch  : true,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin({
            overlay: {
                // integration with webpack-hot-middleware
                sockIntegration: 'whm',
            },
        }),
        process.env.BUILD_ANALYZE && new BundleAnalyzerPlugin({
            openAnalyzer: false,
            logLevel    : 'silent',
            analyzerPort: process.env.BUNDLE_ANALYZER_PORT,
            analyzerHost: '127.0.0.1'
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
