const webpack = require('webpack');

const { paths, configureBundler } = require('./webpack.base');

module.exports = configureBundler({
    mode : 'development',
    entry: {
        bundle: [
            require.resolve('react-app-polyfill/ie11'),
            `${ paths.entry }`,
            'webpack-hot-middleware/client'
        ],
        vendor: [
            'react',
            'react-dom'
        ]
    },
    devtool: 'source-map',
    watch  : true,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
});
