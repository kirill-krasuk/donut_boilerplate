/* eslint-disable react-hooks/rules-of-hooks */
import './shim';

import express                 from 'express';
import processImage            from 'express-processimage';
import expressStaticGzip       from 'express-static-gzip';
import shrinkRay               from 'shrink-ray-current';
import favicon                 from 'serve-favicon';
import cookieParser            from 'cookie-parser';
import bodyParser              from 'body-parser';
import path                    from 'path';
import { ServeStaticOptions }  from 'serve-static';

import config                  from './config';
import { serverSideRendering } from './middlewares/serverSideRendering';
import { errorLogging }        from './middlewares/errorLogging';
import { ONE_MONTH_CACHE }     from './constants/cache';
import { useStatic }           from './utils/useStatic';
import { appBorder }           from './utils/appBorder';
import { getAppOutputInfo }    from './utils/appOutput';
import { headers }             from './constants/headers';
import { createExitHandler }   from './handlers/process';
import { handleClose }         from './handlers/server';

const { host, port } = config;

const app = express();

async function main() {
    app.use(shrinkRay());
    app.use(processImage());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    const serveStaticOptions: ServeStaticOptions = {
        maxAge    : ONE_MONTH_CACHE,
        setHeaders: (res) => {
            res.setHeader(...headers.sw);
            res.setHeader(...headers.isCacheable);
        }
    };

    app.use('/dist', expressStaticGzip(path.resolve(`${ __dirname  }/../dist`), {
        enableBrotli   : true,
        orderPreference: [ 'br', 'gzip', 'deflate' ],
        serveStatic    : serveStaticOptions
    }));
    app.use('/public', expressStaticGzip(path.resolve(`${ __dirname  }/../public`), {
        enableBrotli   : true,
        orderPreference: [ 'br', 'gzip', 'deflate' ],
        serveStatic    : serveStaticOptions
    }));

    app.use('/sw.js', useStatic(`${ __dirname  }/../dist/sw.js`));
    app.use('/images', useStatic(`${ __dirname  }/../public/images`, { maxAge: ONE_MONTH_CACHE }));
    app.use('/images/build', useStatic(`${ __dirname  }/../public/images/build`, { maxAge: ONE_MONTH_CACHE }));
    app.use('/fonts/build', useStatic(`${ __dirname  }/../public/fonts/build`, { maxAge: ONE_MONTH_CACHE }));
    app.use('/', useStatic(`${ __dirname  }/../public/root`));

    app.use(favicon(path.join(__dirname, '..', '/public/images/favicon.ico')));
    app.set('view engine', 'pug');
    app.set('views', path.join(`${ __dirname  }/../dist`));

    if (__IS_DEV__) {
        const { useDevMiddlewares } = await import('./middlewares/useDevMiddlewares');
        useDevMiddlewares(app);
    }

    app.use('/handle_error', errorLogging);
    app.use('/', serverSideRendering);

    const server = app.listen(+port, (host as string), () => appBorder(getAppOutputInfo({ host, port })));

    server.on('close', handleClose);

    const handleExit = createExitHandler(server);

    process.once('SIGTERM', handleExit);
    process.once('SIGINT', handleExit);
}

main();
