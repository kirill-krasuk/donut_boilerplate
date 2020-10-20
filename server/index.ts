/* eslint-disable react-hooks/rules-of-hooks */
import './shim';

import express, { Response }   from 'express';
import shrinkRay               from 'shrink-ray-current';
import favicon                 from 'serve-favicon';
import cookieParser            from 'cookie-parser';
import bodyParser              from 'body-parser';
import path                    from 'path';
import dayjs                   from 'dayjs';
import processImage            from 'express-processimage';

import expressStaticGzip       from 'express-static-gzip';
import config                  from './config';
import { serverSideRendering } from './middlewares/serverSideRendering';
import { errorLogging }        from './middlewares/errorLogging';
import { useDevMiddlewares }   from './middlewares/useDevMiddlewares';
import { ONE_MONTH_CACHE }     from './constants/cache';
import { useStatic }           from './utils/useStatic';

const { host, port } = config;

const app = express();

app.use(shrinkRay());
app.use(processImage());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/dist', useStatic(`${ __dirname  }/../dist`, {
    maxAge    : ONE_MONTH_CACHE,
    setHeaders: (res: Response) => {
        res.set('Service-Worker-Allowed', '/');
        res.set('X-Is-Cacheable', 'true');
    }
}));
app.use('/sw.js', useStatic(`${ __dirname  }/../dist/sw.js`));
app.use('/public', expressStaticGzip(path.resolve(`${ __dirname  }/../public`), { enableBrotli: true }));
app.use('/images', useStatic(`${ __dirname  }/../public/images`, { maxAge: ONE_MONTH_CACHE }));
app.use('/images/build', useStatic(`${ __dirname  }/../public/images/build`, { maxAge: ONE_MONTH_CACHE }));
app.use('/fonts/build', useStatic(`${ __dirname  }/../public/fonts/build`, { maxAge: ONE_MONTH_CACHE }));
app.use('/', useStatic(`${ __dirname  }/../public/root`));

app.use(favicon(path.join(__dirname, '..', '/public/images/favicon.ico')));
app.set('view engine', 'pug');
app.set('views', path.join(`${ __dirname  }/../dist`));

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
