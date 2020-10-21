import BrotliPlugin                from 'brotli-webpack-plugin';
import CompressionPlugin           from 'compression-webpack-plugin';
import OptimizeCssAssetsPlugin     from 'optimize-css-assets-webpack-plugin';
import TerserPlugin                from 'terser-webpack-plugin';
import { BundleAnalyzerPlugin }    from 'webpack-bundle-analyzer';

import { paths, configureBundler } from './webpack.common';

export default configureBundler({
    mode : 'production',
    entry: {
        bundle: [
            // require.resolve('react-app-polyfill/ie11'),
            `${ paths.entry }`,
        ]
    },
    stats       : 'detailed',
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
            new OptimizeCssAssetsPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                default: {
                    test              : /(react|redux)/g,
                    filename          : 'react-vendors.js',
                    chunks            : 'initial',
                    reuseExistingChunk: true,
                    priority          : -10
                },
                defaultVendors: {
                    test              : /[\\/]node_modules[\\/]/,
                    filename          : 'vendors.js',
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
        }),
        new BrotliPlugin({
            asset: '[path].br[query]',
            test : /(\.js(\?.*)?)|(\.css)|(\.html)$/i,
        }),
        new BundleAnalyzerPlugin({
            analyzerMode  : 'static',
            openAnalyzer  : false,
            reportFilename: '../stats/prod-report.html',
        }),
    ]
});
