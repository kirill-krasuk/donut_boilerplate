const express       = require('express');
const webpack       = require('webpack');
const DevMiddleware = require('webpack-dev-middleware');
const HotMiddleware = require('webpack-hot-middleware');
const compression   = require('compression');
const path          = require('path');

const config = require('./config');

const app = express();

const { env, host, port } = config;

app.use(compression());

app.use('/dist', express.static(path.resolve(__dirname, '..', 'dist')));

// app.use('/internals', express.static(path.resolve(__dirname, '..', 'internals')));

app.set('view engine', 'pug');

if (env === 'development') {
    const webpackConfig = require('../webpack/webpack.dev');
    const bundler       = webpack(webpackConfig);

    app.use(DevMiddleware(bundler, {
        publicPath : webpackConfig.output.publicPath,
        writeToDisk: true,
        stats      : {
            all         : false,
            modules     : true,
            maxModules  : 0,
            errors      : true,
            warnings    : true,
            moduleTrace : true,
            errorDetails: true
        }
    }));
    app.use(HotMiddleware(bundler));
}

app.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz'; // eslint-disable-line
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
});

app.use('*', (req, res) => res.render('index'));

app.listen(port, host, () => {
    // eslint-disable-next-line no-console
    console.log(`
        =====================================================
        ${ new Date().toString() }
                        Server started at 
                        Address: ${ host }                   
                        Port:    ${ port }                       
        =====================================================
    `);
});
