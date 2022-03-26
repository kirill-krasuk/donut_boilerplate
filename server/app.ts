/* eslint-disable react-hooks/rules-of-hooks */
import { json, urlencoded }          from 'express';
import processImage                  from 'express-processimage';
import shrinkRay                     from 'shrink-ray-current';
import favicon                       from 'serve-favicon';
import cookieParser                  from 'cookie-parser';
import path                          from 'path';

import { createServerRunnerPromise } from './utils/runServer';
import { handleClose }               from './handlers/server';
import { createExitHandler }         from './handlers/process';
import { errorLogging }              from './middlewares/errorLogging';
import { serverSideRendering }       from './middlewares/serverSideRendering';
import { staticFiles }               from './config/static';
import { HTTPServerAdapter }         from './adapters/server';
import { paths }                     from './constants/paths';

export class Application<T extends HTTPServerAdapter> {
    constructor(private adapter: T) {}

    async build() {
        this.adapter.registerViewTemplate({
            engine   : 'pug',
            viewsPath: path.resolve(__dirname, '../views/')
        });

        this.adapter.registerMiddlewares([
            shrinkRay(),
            processImage(),
            json(),
            urlencoded({ extended: false }),
            cookieParser(),
            favicon(paths.favicon)
        ]);

        this.adapter.registerStaticFiles(staticFiles);

        if (__IS_DEV__) {
            const { useDevMiddlewares } = await import('./middlewares/useDevMiddlewares');
            const compilationPromise    = useDevMiddlewares(this.adapter as any);

            await compilationPromise;
        }

        this.adapter.use('/handle_error', errorLogging);
        this.adapter.use('/', serverSideRendering);
    }

    async start(port: number | string, host: string) {
        await createServerRunnerPromise(this.adapter as any, +port, host);

        const server = this.adapter.getServer();

        if (server) {
            server.on('close', handleClose);

            const handleExit = createExitHandler(server);

            process.once('SIGTERM', handleExit);
            process.once('SIGINT', handleExit);
        }
    }
}
