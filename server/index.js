const express       = require('express');
const webpack       = require('webpack');
const DevMiddleware = require('webpack-dev-middleware');
const HotMiddleware = require('webpack-hot-middleware');
const path          = require('path');
const dotenv        = require('dotenv');

dotenv.config();

const nodeEnv = process.env.NODE_ENV;
const debug   = process.env.DEBUG;

const webpackConfig = require('../webpack.config')({ env: nodeEnv, debug });

const app = express();

const bundler = webpack(webpackConfig);

app.use('/dist', express.static(path.resolve(__dirname, '..', 'dist')));

app.set('view engine', 'pug');

app.use(DevMiddleware(bundler, {
    publicPath: webpackConfig.output.publicPath,
    stats     : { colors: true },
}));
app.use(HotMiddleware(bundler));

app.use('*', (req, res) => res.render('index'));

app.listen(3000, () => {
    console.log('Server started');
});
