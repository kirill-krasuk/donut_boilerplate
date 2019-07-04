const webpack = require('webpack');

const { paths, configureBundler } = require('./webpack.common');

module.exports = configureBundler({
    mode : 'production',
    entry: {
        bundle: [
            require.resolve('react-app-polyfill/ie11'),
            `${ paths.entry }`,
        ]
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin({
            hashFunction    : 'md4',
            hashDigest      : 'base64',
            hashDigestLength: 4,
        })
    ]
});
