// @flow
import type { FetchOptions, HTTPMethod, HTTPResponse }    from 'core/types/HTTP';
import type { iConfigManager }                            from './ConfigManager';

export interface iHTTP {
    _auth: boolean;
    _requestTo: string;
    _path: string;

    _headers: Headers;
    _query: URLSearchParams;

    _configManager: iConfigManager;

    fetch(options: FetchOptions): Promise<HTTPResponse>;

    _callRequest(method: HTTPMethod): Promise<HTTPResponse>;
    _prepareHeaders(): void;
    _getUri(): string;

    get headers(): { [key: string]: string };
    set headers(newHeaders: { [key: string]: string }): void;
    set header(newHeader: { key: string, value: string }): void;
    _setHeaders(newHeaders: { [key: string]: string }): void;
    hasHeader(key: string): boolean;

    get query(): { [key: string]: mixed };
    set query(newQuery: { [key: string]: mixed }): void;
    get queryAsString(): string;
    hasQueryParam(key: string): boolean;
    hasQueryParams(): boolean;

    set body(newBody: { [key: string]: mixed }): void;
    get body(): { [key: string]: mixed };
}
