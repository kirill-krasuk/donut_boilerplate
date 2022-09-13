/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { staticCompression, useStaticFiles } from '@server/lib/server';

import type { Server }                       from 'node:http';
import type {
	ErrorHandler,
	RequestHandler,
	ServerAdapter,
	StaticFilesOptions,
	ViewTemplateOptions
} from './types';

export abstract class HTTPServerAdapter<Request = any, Response = any>
implements ServerAdapter<Request, Response> {
	protected server?: Server;
	abstract type: string;

	constructor(protected instance?: any) {}

	use(
		path: string,
		handler: ErrorHandler<Request, Response> | RequestHandler<Request, Response>
	): any;
	use(
		handler: ErrorHandler<Request, Response> | RequestHandler<Request, Response>
	): any;
	use(...args: any[]): this {
		this.instance.use(...args);

		return this;
	}

	listen(port: number | string, callback?: () => void): void;
	listen(port: number | string, host: string, callback?: () => void): void;
	listen(port: any, ...args: any[]) {
		const server = this.instance.listen(+port, ...args);

		if (server) {
			this.server = server;

			return server;
		}

		this.server = this.instance.server;
	}

	registerStaticFiles(options: StaticFilesOptions): void;
	registerStaticFiles(options: StaticFilesOptions[]): void;
	registerStaticFiles(options: any) {
		if (Array.isArray(options)) {
			options.forEach(option => {
				if (option.compression) {
					this.staticCompression(option);
				} else {
					this.static(option);
				}
			});

			return;
		}

		options.compression
			? this.staticCompression(options)
			: this.static(options);
	}

	registerMiddlewares(middleware: Function): void;
	registerMiddlewares(middlewares: Function[]): void;
	registerMiddlewares(...args: any): void {
		if (Array.isArray(args)) {
			args.forEach(middleware => {
				this.instance.use(middleware);
			});

			return;
		}

		this.instance.use(args);
	}

	getServer(): Server | undefined {
		return this.server;
	}

	private staticCompression({ publicPath, source }: StaticFilesOptions) {
		this.instance.use(publicPath, staticCompression(source));
	}

	private static({ publicPath, source, extras }: StaticFilesOptions) {
		this.instance.use(publicPath, useStaticFiles(source, extras));
	}

	abstract registerViewTemplate(options: ViewTemplateOptions): void;
	abstract init(): Promise<this>;
}
