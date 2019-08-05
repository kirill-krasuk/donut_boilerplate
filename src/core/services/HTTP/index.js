// @flow
import { injectable, inject }                             from 'inversify';

import type { iHTTP }                                     from 'core/interfaces/HTTP';
import type { iConfigManager }                            from 'core/interfaces/ConfigManager';
import type { FetchOptions, HTTPMethod, HTTPResponse }    from 'core/types/HTTP';
import { transformObjectToQuery, transformQueryToObject } from 'core/utils/query';

import { TYPES }                                          from '../types';

@injectable()
export class HTTP implements iHTTP {
    _auth: boolean;
    _requestTo: string;
    _path: string;
    _body: { [key: string]: mixed } = {};

    @inject(TYPES.Headers) _headers: Headers;
    @inject(TYPES.QueryParams) _query: URLSearchParams;

    @inject(TYPES.ConfigManager) _configManager: iConfigManager;

    fetch = async (options: FetchOptions): Promise<HTTPResponse> => {
        const {
            method,
            path,
            requestTo,
            auth
        } = options;

        this._auth      = !!auth;
        this._requestTo = requestTo || '';
        this._path      = path;

        this._prepareHeaders();

        const res = await this._callRequest(method);

        return res;
    }

    async _callRequest(method: HTTPMethod): Promise<HTTPResponse> {
        const options: { [key: string]: any } = {
            method,
            headers: this._headers
        };

        if (method !== 'GET' && method !== 'get') {
            options.body = JSON.stringify(this._body);
        }

        const uri = this._getUri();

        const request: Request   = new Request(uri, options);
        const response: Response = await fetch(request);

        const body = await response
            .json()
            .catch(() => {});

        if (!response.ok) {
            throw new Error(response);
        }

        return {
            body,
            response
        };
    }

    _getUri(): string {
        const url   = this._requestTo || this._configManager.get('apiHost');
        const urn   = this._path;
        const query = this.hasQueryParams() ? `?${ this._query.toString() }` : '';

        const apiPort    = this._configManager.get('apiPort');
        const apiVersion = this._configManager.get('apiVersion');
        const apiPreffix = this._configManager.get('apiPreffix');

        let port    = '',
            version = '',
            preffix = '';

        if (apiPort) {
            port = `:${ apiPort }`;
        }

        if (apiPreffix) {
            preffix = `/${ apiPreffix }`;
        }

        if (apiVersion) {
            version = `/${ apiVersion }`;
        }

        const uri = `${ url }${ port }${ preffix }${ version }${ urn }${ query }`;

        return uri;
    }

    _prepareHeaders(): void {
        const headers = {
            'Content-Type': 'application/json',
            Accept        : 'application/json'
        };

        this._setHeaders(headers);
    }

    _setHeaders(newHeaders: { [key: string]: string }): void {
        Object
            .keys(newHeaders)
            .forEach((key) => {
                this._headers.append(key, newHeaders[key]);
            });
    }

    set headers(newHeaders: { [key: string]: string }): void {
        this._setHeaders(newHeaders);
    }

    set header(newHeader: { key: string, value: string }): void {
        const { key, value } = newHeader;

        this._headers.set(key, value);
    }

    get headers(): { [key: string]: string } {
        const headers = {};

        // eslint-disable-next-line
        for (const pair of this._headers.entries()) {
            const [ key, value ] = pair;

            headers[key] = value;
        }

        return headers;
    }

    hasHeader(key: string): boolean {
        return this._headers.has(key);
    }

    set query(newQuery: { [key: string]: mixed }): void {
        transformObjectToQuery(newQuery, this._query);
    }

    get query(): { [key: string]: mixed } {
        return transformQueryToObject(this._query);
    }

    get queryAsString(): string {
        return this._query
            .toString()
            .replace(/%5B/g, '[')
            .replace(/%5D/g, ']');
    }

    hasQueryParam(key: string): boolean {
        return this._query.has(key);
    }

    hasQueryParams(): boolean {
        return !!this._query.toString().length;
    }

    set body(newBody: { [key: string]: mixed }): void {
        Object
            .keys(newBody)
            .forEach((key) => {
                this._body[key] = newBody[key];
            });
    }

    get body(): { [key: string]: mixed } {
        return this._body;
    }
}
