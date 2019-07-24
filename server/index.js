require('@babel/register')({
    plugins: [
        'dynamic-import-node',
        'macros'
    ]
});
require('@babel/polyfill');
const express       = require('express');
const webpack       = require('webpack');
const DevMiddleware = require('webpack-dev-middleware');
const HotMiddleware = require('webpack-hot-middleware');
const compression   = require('compression');
const favicon       = require('serve-favicon');
const cookieParser  = require('cookie-parser');
const path          = require('path');

const webpackConfigDev    = require('../webpack/webpack.dev');
const webpackConfigProd   = require('../webpack/webpack.prod');
const serverSideRendering = require('./middlewares/serverSideRendering');

const config              = require('./config');

const { env, host, port } = config;

const webpackConfig = env === 'development' ? webpackConfigDev : webpackConfigProd;

const bundler = webpack(webpackConfig);
const app     = express();

app.use(compression());
app.use(cookieParser());

app.use('/dist', express.static(path.resolve(__dirname, '..', 'dist'), { maxAge: '30d' }));
app.use('/sw.js', express.static(path.resolve(__dirname, '..', 'dist/sw.js'), { maxAge: '30d' }));
app.use('/public', express.static(path.resolve(__dirname, '..', 'public'), { maxAge: '30d' }));
app.use('/images', express.static(path.resolve(__dirname, '..', 'public/images'), { maxAge: '30d' }));
app.use('/', express.static(path.resolve(__dirname, '..', 'public/root'), { maxAge: '30d' }));

app.use(favicon(path.join(__dirname, '..', '/public/images/favicon.ico')));

app.set('view engine', 'pug');
app.locals.pretty = true;

app.use(DevMiddleware(bundler, {
    publicPath : webpackConfig.output.publicPath,
    writeToDisk: (name) => {
        const regExp = new RegExp(/(\.json|sw|manifest)/, 'gi');

        if (regExp.test(name)) {
            return true;
        }

        return false;
    },
    stats: {
        all         : false,
        modules     : true,
        maxModules  : 0,
        errors      : true,
        warnings    : env === 'development',
        moduleTrace : true,
        errorDetails: true
    }
}));

if (env === 'development') {
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
