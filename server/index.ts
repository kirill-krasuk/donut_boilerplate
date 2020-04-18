/* eslint-disable import/first */
/* eslint-disable react-hooks/rules-of-hooks */
require('@babel/register')({
    plugins: [
        'dynamic-import-node',
        'macros'
    ]
});

import express      from 'express';
import shrinkRay    from 'shrink-ray-current';
import favicon      from 'serve-favicon';
import cookieParser from 'cookie-parser';
import bodyParser   from 'body-parser';
import path         from 'path';
import dayjs        from 'dayjs';
import processImage from 'express-processimage';
import '@babel/polyfill';

import config                  from './config';
import { serverSideRendering } from './middlewares/serverSideRendering';
import { errorLogging }        from './middlewares/errorLogging';
import { useDevMiddlewares }   from './middlewares/useDevMiddlewares';
import { setStatic }           from './utils/setStatic';

const { host, port } = config;

const app = express();

app.use(shrinkRay());
app.use(processImage());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

setStatic(app);

app.use(favicon(path.join(__dirname, '..', '/public/images/favicon.ico')));
app.set('view engine', 'pug');

useDevMiddlewares(app);

app.use('/handle_error', errorLogging);
app.use('/', serverSideRendering);

app.listen(+port, (host as string), () => {
    // eslint-disable-next-line no-console
    console.log(`
        =====================================================
        \t\t${ dayjs(Date.now()).format('HH:mm:ss DD:MM:YYYY') }
                        Server started at 
                        Address: ${ host }                   
                        Port:    ${ port }                       
        =====================================================
    `);
});
