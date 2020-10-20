const BrotliPlugin             = require('brotli-webpack-plugin');
const CompressionPlugin        = require('compression-webpack-plugin');
const OptimizeCssAssetsPlugin  = require('optimize-css-assets-webpack-plugin');
const TerserPlugin             = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { paths, configureBundler } = require('./webpack.common');

module.exports = configureBundler({
    mode : 'production',
    entry: {
        bundle: [
            // require.resolve('react-app-polyfill/ie11'),
            `${ paths.entry }`,
        ]
    },
    minimize : true,
    minimizer: [
        new TerserPlugin({
            parallel     : true,
            terserOptions: {
                warnings       : false,
                parse          : {},
                compress       : {},
                mangle         : true,
                output         : null,
                toplevel       : false,
                nameCache      : null,
                ie8            : false,
                keep_classnames: undefined,
                keep_fnames    : false,
                safari10       : false,
            },
        }),
        new OptimizeCssAssetsPlugin()
    ],
    plugins: [
        new CompressionPlugin({
            filename: '[path].gz[query]',
            test    : /(\.js(\?.*)?)|(\.css)|(\.html)$/i,
        }),
        new BrotliPlugin({
            filename: '[path].br[query]',
            test    : /(\.js(\?.*)?)|(\.css)|(\.html)$/i,
        }),
        new BundleAnalyzerPlugin({
            analyzerMode  : 'static',
            openAnalyzer  : false,
            reportFilename: '../stats/prod-report.html',
        }),
    ]
});
