import webpack                     from 'webpack';
import { BundleAnalyzerPlugin }    from 'webpack-bundle-analyzer';
import path                        from 'path';
import ReactRefreshWebpackPlugin   from '@pmmmwh/react-refresh-webpack-plugin';

// import CircularDependencyPlugin from 'circular-dependency-plugin';

import { paths, configureBundler } from './webpack.common';

export default configureBundler({
    mode : 'development',
    entry: {
        bundle: [
            // require.resolve('react-app-polyfill/ie11'),
            `${ paths.entry }`,
            'webpack-hot-middleware/client'
        ]
    },
    cache: {
        type          : 'filesystem',
        name          : 'dev-client-cache',
        cacheDirectory: path.resolve(__dirname, '../.cache')
    },
    devtool     : 'eval-cheap-module-source-map',
    optimization: {
        usedExports           : true,
        emitOnErrors          : true,
        removeAvailableModules: false,
        removeEmptyChunks     : false,
        splitChunks           : false,
    },
    stats  : 'normal',
    watch  : true,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin({
            overlay: {
                // integration with webpack-hot-middleware
                sockIntegration: 'whm',
            },
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerPort: 8181,
            analyzerHost: '127.0.0.1'
        }),

        // new CircularDependencyPlugin({
        //     exclude: /node_modules/,
        //     onDetected({ paths, compilation }) {
        //         compilation.errors.push(new Error(paths.join(' -> ')));
        //     },
        //     failOnError: true
        // }),
    ]
});
