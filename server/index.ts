/* eslint-disable react-hooks/rules-of-hooks */
import './shim';

import express, { json, urlencoded, RequestHandler } from 'express';
import processImage                                  from 'express-processimage';
import shrinkRay                                     from 'shrink-ray-current';
import favicon                                       from 'serve-favicon';
import cookieParser                                  from 'cookie-parser';

import { env }                                       from '@env/index';
import { createUsePortHandler }                      from './handlers/handleUsePort';
import { createServerRunner }                        from './utils/runServer';
import { serverSideRendering }                       from './middlewares/serverSideRendering';
import { errorLogging }                              from './middlewares/errorLogging';
import { ONE_MONTH_CACHE }                           from './constants/cache';
import { paths }                                     from './constants/paths';
import { useStatic }                                 from './utils/useStatic';
import { createExitHandler }                         from './handlers/process';
import { handleClose }                               from './handlers/server';
import { staticCompression }                         from './handlers/staticCompression';

const { host, port } = env.server;

const app = express();

const runServer     = createServerRunner(app);
const handleUsePort = createUsePortHandler({ port, host }, runServer);

async function main() {
    app.use(shrinkRay());
    app.use(processImage());
    app.use(<RequestHandler>json());
    app.use(<RequestHandler>urlencoded({ extended: false }));
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
        const compilationPromise    = useDevMiddlewares(app);

        await compilationPromise;
    }

    app.use('/handle_error', errorLogging);
    app.use('/', serverSideRendering);

    const server = runServer({ port, host });

    server.on('close', handleClose);
    server.once('error', handleUsePort);

    const handleExit = createExitHandler(server);

    process.once('SIGTERM', handleExit);
    process.once('SIGINT', handleExit);
}

main();
