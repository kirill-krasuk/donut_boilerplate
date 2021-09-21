/* eslint-disable react-hooks/rules-of-hooks */
import './shim';

import express, { json, urlencoded, RequestHandler } from 'express';
import processImage                                  from 'express-processimage';
import shrinkRay                                     from 'shrink-ray-current';
import favicon                                       from 'serve-favicon';
import cookieParser                                  from 'cookie-parser';

import env                                           from '@env/';
import { serverSideRendering }                       from './middlewares/serverSideRendering';
import { errorLogging }                              from './middlewares/errorLogging';
import { ONE_MONTH_CACHE }                           from './constants/cache';
import { paths }                                     from './constants/paths';
import { useStatic }                                 from './utils/useStatic';
import { appBorder }                                 from './utils/appBorder';
import { getAppOutputInfo }                          from './utils/appOutput';
import { createExitHandler }                         from './handlers/process';
import { handleClose }                               from './handlers/server';
import { staticCompression }                         from './handlers/staticCompression';
import '../config/env';

const { host, port } = env.server;

const app = express();

async function main() {
    app.use(shrinkRay());
    app.use(processImage());
    app.use(json() as RequestHandler);
    app.use(urlencoded({ extended: false }) as RequestHandler);
    app.use(cookieParser());

    app.use('/dist', staticCompression(paths.dist));
    app.use('/public', staticCompression(paths.public));

    app.use('/sw.js', useStatic(paths.serviceWorker));
    app.use('/images', useStatic(paths.images.static, { maxAge: ONE_MONTH_CACHE }));
    app.use('/images/build', useStatic(paths.images.builded, { maxAge: ONE_MONTH_CACHE }));
    app.use('/fonts/build', useStatic(paths.fonts, { maxAge: ONE_MONTH_CACHE }));
    app.use('/', useStatic(paths.root));

    app.use(favicon(paths.favicon));
    app.set('view engine', 'pug');
    app.set('views', paths.dist);

    if (__IS_DEV__) {
        const { useDevMiddlewares } = await import('./middlewares/useDevMiddlewares');
        useDevMiddlewares(app);
    }

    app.use('/handle_error', errorLogging);
    app.use('/', serverSideRendering);

    const server = app.listen(+port, (host as string), () => appBorder(getAppOutputInfo({ host, port: port.toString() })));

    server.on('close', handleClose);

    const handleExit = createExitHandler(server);

    process.once('SIGTERM', handleExit);
    process.once('SIGINT', handleExit);
}

main();
