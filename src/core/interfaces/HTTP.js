// @flow

import type { FetchOptions, HTTPMethod, HTTPResponse }    from 'core/types/HTTP';
import type { GenericObject }                             from 'core/types/object';
import type { iHeaders }                                  from 'core/interfaces/Headers';
import type { iConfigManager }                            from './ConfigManager';
import type { iQuery }                                    from './Query';

export interface iHTTP {
    _auth: boolean;
    _requestTo: string;
    _path: string;
    _body: GenericObject<mixed>;

    _headers: iHeaders;
    _query: iQuery;

    _configManager: iConfigManager;

    fetch(options: FetchOptions): Promise<HTTPResponse>;

    _callRequest(method: HTTPMethod): Promise<HTTPResponse>;
    _prepareHeaders(): void;
    _getUri(): string;

    get headers(): GenericObject<string>;
    set headers(newHeaders: GenericObject<string>): void;
    set header(newHeader: GenericObject<string>): void;
    _setHeaders(newHeaders: GenericObject<string>): void;
    hasHeader(key: string): boolean;

    get query(): GenericObject<mixed>;
    set query(newQuery: GenericObject<mixed>): void;
    get queryAsString(): string;
    hasQueryParam(key: string): boolean;
    hasQueryParams(): boolean;

    set body(newBody: GenericObject<mixed>): void;
    get body(): GenericObject<mixed>;
}
