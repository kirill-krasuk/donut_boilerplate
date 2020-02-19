import { FetchOptions, HTTPMethod, HTTPResponse } from '@core/types/HTTP';
import { Headers }                                from '@core/interfaces/Headers';
import { ConfigManager }                          from './ConfigManager';
import { iQuery }                                 from './Query';

export interface HTTP {
    _auth: boolean;
    _requestTo: string;
    _path: string;
    _body: Record<string, any>;

    _headers: Headers;
    _query: iQuery;

    _configManager: ConfigManager;

    fetch(options: FetchOptions): Promise<HTTPResponse>;

    _callRequest(method: HTTPMethod): Promise<HTTPResponse>;
    _prepareHeaders(): void;
    _getUri(): string;

    get headers(): GenericObject<string>;
    set headers(newHeaders: GenericObject<string>);
    set header(newHeader: GenericObject<string>);
    _setHeaders(newHeaders: GenericObject<string>): void;
    hasHeader(key: string): boolean;

    get query(): Record<string, any>;
    set query(newQuery: Record<string, any>): void;
    get queryAsString(): string;
    hasQueryParam(key: string): boolean;
    hasQueryParams(): boolean;

    set body(newBody: Record<string, any>): void;
    get body(): Record<string, any>;
}
