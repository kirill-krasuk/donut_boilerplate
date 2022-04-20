/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { staticCompression, useStaticFiles } from '@server/lib/server';

import type { Server }                       from 'node:http';
import type {
    ErrorHandler,
    RequestHandler,
    StaticFilesOptions,
    ViewTemplateOptions,
    ServerAdapter
} from './types';

export abstract class HTTPServerAdapter<Request = any, Response = any> implements ServerAdapter<Request, Response> {
    abstract type: string;

    protected server?: Server;

    constructor(protected instance?: any) {}

    private staticCompression({ publicPath, source }: StaticFilesOptions) {
        this.instance.use(publicPath, staticCompression(source));
    }

    private static({ publicPath, source, extras }: StaticFilesOptions) {
        this.instance.use(publicPath, useStaticFiles(source, extras));
    }

    public use(path: string, handler: ErrorHandler<Request, Response> | RequestHandler<Request, Response>): any;
    public use(handler: ErrorHandler<Request, Response> | RequestHandler<Request, Response>): any;
    public use(...args: any[]): this {
        this.instance.use(...args);

        return this;
    }

    public listen(port: number | string, callback?: () => void): void;
    public listen(port: number | string, host: string, callback?: () => void): void;
    public listen(port: any, ...args: any[]) {
        const server = this.instance.listen(+port, ...args);

        if (server) {
            this.server = server;

            return server;
        }

        this.server = this.instance.server;
    }

    public registerStaticFiles(options: StaticFilesOptions): void;
    public registerStaticFiles(options: StaticFilesOptions[]): void;
    public registerStaticFiles(options: any) {
        if (Array.isArray(options)) {
            options.forEach((option) => {
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

    public registerMiddlewares(middleware: Function): void;
    public registerMiddlewares(middlewares: Function[]): void;
    public registerMiddlewares(...args: any): void {
        if (Array.isArray(args)) {
            args.forEach((middleware) => {
                this.instance.use(middleware);
            });

            return;
        }

        this.instance.use(args);
    }

    public getServer(): Server | undefined {
        return this.server;
    }

    abstract registerViewTemplate(options: ViewTemplateOptions): void;
}
