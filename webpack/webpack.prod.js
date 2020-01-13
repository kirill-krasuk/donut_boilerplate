// const webpack                 = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin            = require('terser-webpack-plugin');

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
            cache        : true,
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
        // new webpack.HashedModuleIdsPlugin({
        //     hashFunction    : 'md4',
        //     hashDigest      : 'base64',
        //     hashDigestLength: 4,
        // }),

        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerPort: 8181,
            analyzerHost: '127.0.0.1'
        }),
    ]
});
