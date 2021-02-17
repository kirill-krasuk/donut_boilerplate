import webpack                     from 'webpack';
import BrotliPlugin                from 'brotli-webpack-plugin';
import CompressionPlugin           from 'compression-webpack-plugin';
import OptimizeCssAssetsPlugin     from 'optimize-css-assets-webpack-plugin';
import TerserPlugin                from 'terser-webpack-plugin';
import { BundleAnalyzerPlugin }    from 'webpack-bundle-analyzer';

import { paths, configureBundler } from './webpack.common';

const isNeedBundleAnalyze = JSON.parse(process.env.BUILD_ANALYZE || 'false');

export default configureBundler({
    mode : 'production',
    entry: {
        bundle: [
            // require.resolve('react-app-polyfill/ie11'),
            `${ paths.entry }`,
        ]
    },
    stats      : 'detailed',
    performance: {
        hints            : false,
        maxEntrypointSize: 512000,
        maxAssetSize     : 512000
    },
    optimization: {
        minimize : true,
        minimizer: [
            new TerserPlugin({
                parallel     : true,
                terserOptions: {
                    compress       : true,
                    mangle         : true,
                    toplevel       : false,
                    ie8            : false,
                    keep_classnames: undefined,
                    keep_fnames    : false,
                    safari10       : false,
                },
            }),
            new OptimizeCssAssetsPlugin() as webpack.WebpackPluginInstance
        ],
        splitChunks: {
            chunks     : 'all',
            cacheGroups: {
                default: {
                    test              : /(react|redux)/g,
                    filename          : 'react-vendors.[contenthash:8].js',
                    chunks            : 'initial',
                    reuseExistingChunk: true,
                    priority          : -10
                },
                defaultVendors: {
                    test              : /.yarn/,
                    filename          : 'vendors.[contenthash:8].js',
                    chunks            : 'initial',
                    reuseExistingChunk: true,
                    priority          : -20
                }
            }
        },
    },
    plugins: [
        new CompressionPlugin({
            filename: '[path].gz[query]',
            test    : /(\.js(\?.*)?)|(\.css)|(\.html)$/i,
            minRatio: 0.8
        }),
        isNeedBundleAnalyze && new BundleAnalyzerPlugin({
            analyzerMode  : 'static',
            openAnalyzer  : false,
            reportFilename: '../stats/prod-report.html',
        }),
        new BrotliPlugin({
            asset   : '[path].br[query]',
            test    : /(\.js(\?.*)?)|(\.css)|(\.html)$/i,
            minRatio: 0.8
        }) as webpack.WebpackPluginInstance,
    ].filter(Boolean)
});
