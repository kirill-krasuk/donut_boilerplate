/* eslint-disable react-hooks/rules-of-hooks */
require('@babel/register')({
    plugins: [
        'dynamic-import-node',
        'macros'
    ]
});
require('@babel/polyfill');
const express      = require('express');
const compression  = require('compression');
const favicon      = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const path         = require('path');

const { serverSideRendering } = require('./middlewares/serverSideRendering');
const { errorLogging }        = require('./middlewares/errorLogging');
const { useDevMiddlewares }   = require('./middlewares/useDevMiddlewares');

const config              = require('./config').default;

const { host, port } = config;

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const oneDayCache = 60 * 1000 * 60 * 24;
app.use('/dist', express.static(path.resolve(__dirname, '..', 'dist'), { maxAge: oneDayCache }));
app.use('/sw.js', express.static(path.resolve(__dirname, '..', 'dist/sw.js')));
app.use('/public', express.static(path.resolve(__dirname, '..', 'public'), { maxAge: oneDayCache }));
app.use('/images', express.static(path.resolve(__dirname, '..', 'public/images'), { maxAge: oneDayCache }));
app.use('/', express.static(path.resolve(__dirname, '..', 'public/root')));

app.use(favicon(path.join(__dirname, '..', '/public/images/favicon.ico')));

app.set('view engine', 'pug');

useDevMiddlewares(app);

app.use('/handle_error', errorLogging);

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
