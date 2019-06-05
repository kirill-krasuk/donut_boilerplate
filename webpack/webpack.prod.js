const { paths, configureBundler } = require('./webpack.base');

module.exports = configureBundler({
    mode : 'production',
    entry: {
        bundle: [
            require.resolve('react-app-polyfill/ie11'),
            `${ paths.entry }`,
        ]
    },
    plugins: []
});
