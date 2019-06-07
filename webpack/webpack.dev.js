const webpack                  = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const { paths, configureBundler } = require('./webpack.common');

module.exports = configureBundler({
    mode : 'development',
    entry: {
        bundle: [
            require.resolve('react-app-polyfill/ie11'),
            `${ paths.entry }`,
            'webpack-hot-middleware/client'
        ]
    },
    devtool: 'source-map',
    watch  : true,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CircularDependencyPlugin({
            onStart() {
                console.log('! start detecting circular dependency !'); // eslint-disable-line
            },
            onDetected({ paths, compilation }) {
                compilation.errors.push(new Error(paths.join(' -> ')));
            },
            onEnd() {
                console.log('! end detecting circular dependency   !'); // eslint-disable-line
            },
            failOnError: true
        }),
    ]
});
