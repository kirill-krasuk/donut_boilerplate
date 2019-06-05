const path    = require('path');

const HtmlPlugin         = require('html-webpack-plugin');
const HtmlPugPlugin      = require('html-webpack-pug-plugin');
const HtmlHardDiskPlugin = require('html-webpack-harddisk-plugin');
const CompressionPlugin  = require('compression-webpack-plugin');

const paths = {
    src     : path.resolve(__dirname, '..', 'src'),
    dist    : path.resolve(__dirname, '..', 'dist'),
    entry   : path.resolve(__dirname, '..', 'src', 'core', 'index.jsx'),
    template: path.resolve(__dirname, '..', 'src', 'core', 'templates', 'index.pug'),
    view    : path.resolve(__dirname, '..', 'views', 'index.pug')
};

module.exports = {
    paths,
    configureBundler(options) {
        const isProd = options.mode === 'production';

        function addHash(template, hash) {
            return isProd
                ? template.replace(/\.[^.]+$/, `.[${ hash }]$&`)
                : template;
        }

        return {
            mode  : options.mode,
            entry : options.entry,
            output: {
                path      : paths.dist,
                filename  : addHash('js/[name].js', 'hash:8'),
                publicPath: '/dist/'
            },
            devtool      : options.devtool || false,
            resolveLoader: {
                moduleExtensions: [ '-loader' ]
            },
            resolve: {
                extensions: [ '.js', '.jsx', '.css', '.sass', '.scss', '.json' ],
                alias     : {
                    'react-dom': '@hot-loader/react-dom'
                }
            },
            module: {
                rules: [ {
                    test   : /\.jsx?$/,
                    exclude: /node_modules/,
                    loader : 'babel'
                }, {
                    test  : /\.css$/,
                    loader: 'style!css',
                }, {
                    test  : /\.(scss|sass)$/,
                    loader: 'style!css!resolve-url!sass?sourceMap'
                } ]
            },
            watch  : options.watch || false,
            plugins: options.plugins.concat([
                new HtmlPlugin({
                    template         : paths.template,
                    filename         : paths.view,
                    alwaysWriteToDisk: true
                }),
                new HtmlHardDiskPlugin(),
                new HtmlPugPlugin(),
                new CompressionPlugin({
                    cache: true,
                    test : /\.js(\?.*)?$/i
                }),
            ])
        };
    }
};
