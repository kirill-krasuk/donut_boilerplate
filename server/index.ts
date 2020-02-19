/* eslint-disable import/first */
/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line
require('@babel/register')({
    plugins: [
        'dynamic-import-node',
        'macros'
    ]
});

import express, {
    Request,
    Response,
    NextFunction,
    Application
} from 'express';
import compression                                  from 'compression';
import favicon                                      from 'serve-favicon';
import cookieParser                                 from 'cookie-parser';
import bodyParser                                   from 'body-parser';
import path                                         from 'path';
import '@babel/polyfill';

import { ONE_MONTH_CACHE }                          from './constants/cache';
import config                                       from './config';
import { serverSideRendering }                      from './middlewares/serverSideRendering';
import { errorLogging }                             from './middlewares/errorLogging';
import { useDevMiddlewares }                        from './middlewares/useDevMiddlewares';
import { useStatic }                                from './utils/useStatic';

const { host, port } = config;

const app: Application = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/dist', useStatic(`${ __dirname  }/../dist`, { maxAge: ONE_MONTH_CACHE }));
app.use('/sw.js', useStatic(`${ __dirname  }/../dist/sw.js`));
app.use('/public', useStatic(`${ __dirname  }/../public`, { maxAge: ONE_MONTH_CACHE }));
app.use('/images', useStatic(`${ __dirname  }/../public/images`, { maxAge: ONE_MONTH_CACHE }));
app.use('/', useStatic(`${ __dirname  }/../public/root`));

app.use(favicon(path.join(__dirname, '..', '/public/images/favicon.ico')));

app.set('view engine', 'pug');

useDevMiddlewares(app);

app.use('/handle_error', errorLogging);

app.get('*.js', (req: Request, res: Response, next: NextFunction) => {
    req.url = req.url + '.gz'; // eslint-disable-line

    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');

    next();
});

app.use('/', serverSideRendering);

app.listen((port as number), (host as string), () => {
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
