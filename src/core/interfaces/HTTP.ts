import { FetchOptions, HTTPMethod, HTTPResponse } from '@core/types/HTTP';
import { Headers }                                from '@core/interfaces/Headers';
import { ConfigManager }                          from './ConfigManager';
import { Query }                                  from './Query';

export interface HTTP {
    _auth: boolean;
    _requestTo: string;
    _path: string;
    _body: Record<string, any>;

    _headers: Headers;
    _query: Query;

    _configManager: ConfigManager;

    fetch(options: FetchOptions): Promise<HTTPResponse>;

    _callRequest(method: HTTPMethod): Promise<HTTPResponse>;
    _prepareHeaders(): void;
    _getUri(): string;

    getHeaders(): object;
    setHeaders(newHeaders: object): void;
    setHeader(newHeader: object): void;
    _setHeaders(newHeaders: object): void;
    hasHeader(key: string): boolean;

    getQuery(): Record<string, any>;
    setQuery(newQuery: Record<string, any>): void;
    getQueryAsString(): string;
    hasQueryParam(key: string): boolean;
    hasQueryParams(): boolean;

    setBody(newBody: Record<string, any>): void;
    getBody(): Record<string, any>;
}
