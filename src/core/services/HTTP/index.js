// @flow

import { injectable, inject }                             from 'inversify';

import type { iHTTP }                                     from 'core/interfaces/HTTP';
import type { iConfigManager }                            from 'core/interfaces/ConfigManager';
import type { FetchOptions, HTTPMethod, HTTPResponse }    from 'core/types/HTTP';
import type { GenericObject }                             from 'core/types/object';
import type { iQuery }                                    from 'core/interfaces/Query';
import type { iHeaders }                                  from 'core/interfaces/Headers';

import { TYPES }                                          from '../types';
import { HTTPError }                                      from '../HTTPError';

@injectable()
export class HTTP implements iHTTP {
    _auth: boolean;
    _requestTo: string;
    _path: string;
    _body: GenericObject<mixed> = {};

    @inject(TYPES.Headers) _overridedHeaders: iHeaders;
    @inject(TYPES.Headers) _headers: iHeaders;
    @inject(TYPES.Query) _query: iQuery;

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
        const options: Object = {
            method,
            headers: this._headers.toObject()
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
            throw new HTTPError(response, request, body);
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

        if (url === 'root') {
            return `${ preffix }${ version }${ urn }${ query }`;
        }

        const uri = `${ url }${ port }${ preffix }${ version }${ urn }${ query }`;

        return uri;
    }

    _prepareHeaders(): void {
        const headers = {
            'Content-Type': 'application/json',
            Accept        : 'application/json',

            // flow-disable-next-line
            ...this._overridedHeaders.toObject()
        };

        this._setHeaders(headers);
    }

    _setHeaders(newHeaders: GenericObject<string>): void {
        Object
            .keys(newHeaders)
            .forEach((key) => {
                this._headers.set(key, newHeaders[key]);
            });
    }

    set headers(newHeaders: GenericObject<string>): void {
        Object
            .keys(newHeaders)
            .forEach((key) => {
                this._overridedHeaders.set(key, newHeaders[key]);
            });
    }

    set header(newHeader: { key: string, value: string }): void {
        const { key, value } = newHeader;

        this._headers.set(key, value);
    }

    get headers(): GenericObject<string> {
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

    set query(newQuery: GenericObject<mixed>): void {
        Object
            .keys(newQuery)
            .forEach(key => this._query.set(key, newQuery[key]));
    }

    get query(): GenericObject<mixed> {
        return this._query.toObject();
    }

    get queryAsString(): string {
        return this._query.toString();
    }

    hasQueryParam(key: string): boolean {
        return this._query.has(key);
    }

    hasQueryParams(): boolean {
        return !!this._query
            .toString()
            .length;
    }

    set body(newBody: GenericObject<mixed>): void {
        Object
            .keys(newBody)
            .forEach((key) => {
                this._body[key] = newBody[key];
            });
    }

    get body(): GenericObject<mixed> {
        return this._body;
    }
}
