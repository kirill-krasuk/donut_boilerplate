const webpack                   = require('webpack');
const { BundleAnalyzerPlugin }  = require('webpack-bundle-analyzer');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// const CircularDependencyPlugin = require('circular-dependency-plugin');

const { paths, configureBundler } = require('./webpack.common');
const { bundlingProgress }        = require('./utils/bundlingProgress');

module.exports = configureBundler({
    mode : 'development',
    entry: {
        bundle: [
            // require.resolve('react-app-polyfill/ie11'),
            `${ paths.entry }`,
            'webpack-hot-middleware/client'
        ]
    },
    devtool     : 'eval-cheap-module-source-map',
    optimization: {
        usedExports : true,
        emitOnErrors: true,
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

        new webpack.ProgressPlugin(bundlingProgress('Client progress bundling: '))
    ]
});
