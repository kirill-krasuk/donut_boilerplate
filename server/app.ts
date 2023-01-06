/* eslint-disable react-hooks/rules-of-hooks */
import cookieParser         from 'cookie-parser';
import { json, urlencoded } from 'express';
import processImage         from 'express-processimage';
import favicon              from 'serve-favicon';
import shrinkRay            from 'shrink-ray-current';

import { staticFiles }      from './config/static';
import { paths }            from './constants/paths';
import {
	createExitHandler,
	handleClientError,
	handleClose
} from './handlers';
import { createServerRunnerPromise } from './lib/server';
import { serverSideRendering }       from './middlewares';

import type { HTTPServerAdapter }    from './adapters/server';

export class ApplicationFacade<T extends HTTPServerAdapter> {
	constructor(private adapter: T) {}

	async start(port: number | string, host: string) {
		await this.build();

		await createServerRunnerPromise(this.adapter, +port, host);

		const server = this.adapter.getServer();

		if (server) {
			const handleExit = createExitHandler(server);

			server.on('close', handleClose);
			process.once('SIGTERM', handleExit);
			process.once('SIGINT', handleExit);
		}
	}

	private async build() {
		this.adapter.registerViewTemplate({
			engine   : 'pug',
			viewsPath: `${ process.cwd() }/views`
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
			const { useDevMiddlewares } = await import('./middlewares/dev');
			const compilationPromise    = useDevMiddlewares(this.adapter as any);

			await compilationPromise;
		}

		this.adapter.use('/handle_error', handleClientError);
		this.adapter.use('/', serverSideRendering);
	}
}
