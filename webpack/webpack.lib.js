const path    = require('path');
const webpack = require('webpack');

const libPath = path.resolve(__dirname, '..', 'libs');

module.exports = {
    context: process.cwd(),
    mode   : 'development',
    resolve: {
        extensions: [ '.js', '.jsx', '.json', '.less', '.css' ],
        modules   : [ __dirname, 'node_modules' ]
    },
    entry: {
        vendor: [
            'react',
            'redux'
        ]
    },
    output: {
        filename: '[name].dll.js',
        path    : libPath,
        library : '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name].json',
            path: `${ libPath }/[name].json`
        })
    ]
};
