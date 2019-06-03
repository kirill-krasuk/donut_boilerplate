const path = require('path');

const PATHS = {
    entry : path.resolve(__dirname, 'src', 'index.jsx'),
    output: path.resolve(__dirname, 'dist')
};

const config = {
    entry : PATHS.entry,
    output: {
        path    : PATHS.output,
        filename: 'bundle.js'
    },
    module: {
        rules: [ {
            test   : /\.jsx$/,
            exclude: /node_modules/,
            use    : {
                loader: 'babel-loader'
            }
        } ]
    }
};

module.exports = config;
