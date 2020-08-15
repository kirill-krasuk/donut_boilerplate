const webpack                  = require('webpack');
const path                     = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HardSourceWebpackPlugin  = require('hard-source-webpack-plugin');

const { paths, configureBundler } = require('./webpack.common');

const bundlingProgress = (percentage, message) => {
    process.stdout.write(`\t${ (percentage * 100).toFixed(2) }% ${ message }\r`);
};

module.exports = configureBundler({
    mode : 'development',
    entry: {
        bundle: [
            // require.resolve('react-app-polyfill/ie11'),
            `${ paths.entry }`,
            'webpack-hot-middleware/client'
        ]
    },
    devtool  : 'cheap-module-eval-source-map',
    minimizer: [],
    watch    : true,
    plugins  : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerPort: 8181,
            analyzerHost: '127.0.0.1'
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            onDetected({ paths, compilation }) {
                compilation.errors.push(new Error(paths.join(' -> ')));
            },
            failOnError: true
        }),
        new HardSourceWebpackPlugin({
            cacheDirectory: path.resolve(__dirname, '..', '.cache/hard_source_plugin/'),
            configHash(webpackConfig) {
                return require('node-object-hash')({ sort: false }).hash(webpackConfig);
            },
        }),
        new HardSourceWebpackPlugin.ExcludeModulePlugin([ {
            test: /mini-css-extract-plugin[\\/]dist[\\/]loader/,
        }, {
            test: /loadable\.js/
        }, {
            test: /src\/vendors/
        } ]),
        new webpack.ProgressPlugin(bundlingProgress)
    ]
});
