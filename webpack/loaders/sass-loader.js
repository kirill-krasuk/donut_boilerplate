module.exports = {
    test  : /\.s(c|a)ss$/,
    loader: 'cache!style!css!resolve-url!sass?sourceMap'
};
