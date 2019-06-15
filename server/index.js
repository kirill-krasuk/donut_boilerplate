require('@babel/register');
require('@babel/polyfill');
const express       = require('express');
const webpack       = require('webpack');
const DevMiddleware = require('webpack-dev-middleware');
const HotMiddleware = require('webpack-hot-middleware');
const compression   = require('compression');
const path          = require('path');

const serverSideRendering = require('./middlewares/serverSideRendering');

const config = require('./config');

const app = express();

const { env, host, port } = config;

app.use(compression());

app.use('/dist', express.static(path.resolve(__dirname, '..', 'dist'), { maxAge: '30d' }));
app.use('/sw.js', express.static(path.resolve(__dirname, '..', 'dist/sw.js'), { maxAge: '30d' }));
app.use('/public', express.static(path.resolve(__dirname, '..', 'public'), { maxAge: '30d' }));

app.set('view engine', 'pug');
app.set('view options', { pretty: true });

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

app.use('/', serverSideRendering);

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
