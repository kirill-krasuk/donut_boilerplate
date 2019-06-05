const express       = require('express');
const webpack       = require('webpack');
const DevMiddleware = require('webpack-dev-middleware');
const HotMiddleware = require('webpack-hot-middleware');
const compression   = require('compression');
const path          = require('path');
const dotenv        = require('dotenv');

dotenv.config();

const app = express();

const nodeEnv = process.env.NODE_ENV;

app.use(compression());

app.use('/dist', express.static(path.resolve(__dirname, '..', 'dist')));

app.set('view engine', 'pug');

if (nodeEnv === 'development') {
    const webpackConfig = require('../webpack/webpack.dev');
    const bundler       = webpack(webpackConfig);

    app.use(DevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats     : { colors: true },
    }));
    app.use(HotMiddleware(bundler));
}

app.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz'; // eslint-disable-line
    res.set('Content-Encoding', 'gzip');
    next();
});

app.use('*', (req, res) => res.render('index'));

app.listen(3000, () => {
    console.log('Server started');
});
