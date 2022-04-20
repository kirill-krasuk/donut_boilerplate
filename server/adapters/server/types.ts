/* eslint-disable @typescript-eslint/ban-types */
import { Server } from 'node:http';

type ErrorHandler<Request = any, Response = any> = (
    error: any,
    request: Request,
    response: Response,
    next?: Function
) => any;

type RequestHandler<Request = any, Response = any> = (
    request: Request,
    response: Response,
    next?: Function
) => any;

type ViewTemplateOptions = {
    engine: string,
    viewsPath?: string
}

type StaticFilesOptions = {
    publicPath: string,
    source: string,
    compression?: boolean,
    extras?: Record<string, unknown>
}

interface ServerAdapter<Request = any, Response = any> {
    use(path: string, handler: ErrorHandler<Request, Response> | RequestHandler<Request, Response>): any;
    use(handler: ErrorHandler<Request, Response> | RequestHandler<Request, Response>): any;

    listen(port: number | string, callback?: () => void): any;
    listen(port: number | string, host: string, callback?: () => void): any;

    registerStaticFiles(options: StaticFilesOptions): void;
    registerStaticFiles(options: StaticFilesOptions[]): void;

    registerStaticFiles(options: StaticFilesOptions): void;
    registerStaticFiles(options: StaticFilesOptions[]): void;

    registerViewTemplate(options: ViewTemplateOptions): void;
    registerViewTemplate(options: any): any;

    getServer(): Server | undefined;
}

export type {
    ErrorHandler,
    RequestHandler,
    ViewTemplateOptions,
    StaticFilesOptions,
    ServerAdapter
};
