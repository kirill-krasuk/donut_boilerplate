import fetch from 'isomorphic-fetch';

import {
    FetchOptions,
    HTTPMethod,
    HTTPResponse,
    ResponseWithStatusCodes
} from '@core/types/HTTP';
import { HTTP as IHTTP } from '@core/interfaces/HTTP';
import { Headers }       from '../Headers';
import { Query }         from '../Query';
import { ConfigManager } from '../ConfigManager';
import { HTTPError }     from '../HTTPError';

// TODO: refactoring to FP style
export class HTTP implements IHTTP {
    _auth = false;
    _requestTo = '';
    _path = '';
    _body: Record<string, any> = {};
    _bodyIsFormData = false;

    _overridedHeaders: Headers = new Headers();
    _headers: Headers = new Headers();
    _query: Query = new Query();

    _configManager: ConfigManager = new ConfigManager();

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
        const options: Record<string, any> = {
            method,
            headers: this._headers.toObject()
        };

        if (method !== 'GET' && method !== 'get') {
            options.body = this._bodyIsFormData ? this._body : JSON.stringify(this._body);
        }

        const uri = this._getUri();

        const request  = new Request(uri, options);
        const response = await fetch(uri, options) as ResponseWithStatusCodes;

        const body = await response
            .json()
            .catch(() => null);

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
        const headers: Record<string, any> = {
            Accept: 'application/json',

            // flow-disable-next-line
            ...this._overridedHeaders.toObject()
        };

        if (!this._bodyIsFormData) {
            headers['Content-Type'] = 'application/json';
        }

        this._setHeaders(headers);
    }

    _setHeaders(newHeaders: Record<string, any>): void {
        Object
            .keys(newHeaders)
            .forEach((key) => {
                if (newHeaders[key] && key) {
                    this._headers.set(key, newHeaders[key]);
                }
            });
    }

    setHeaders(newHeaders: Record<string, any>): void {
        Object
            .keys(newHeaders)
            .forEach((key) => {
                if (newHeaders[key] && key) {
                    this._overridedHeaders.set(key, newHeaders[key]);
                }
            });
    }

    setHeader(newHeader: { key: string; value: string }): void {
        const { key, value } = newHeader;

        if (key && value) {
            this._headers.set(key, value);
        }
    }

    getHeaders(): Record<string, any> {
        const headers: Record<string, any> = {};

        // hardcode type
        for (const pair of this._headers.entries() as any) {
            const [ key, value ] = pair;

            headers[key] = value;
        }

        return headers;
    }

    hasHeader(key: string): boolean {
        return this._headers.has(key);
    }

    setQuery(newQuery: Record<string, any>): void {
        Object
            .keys(newQuery)
            .forEach(key => this._query.set(key, newQuery[key]));
    }

    getQuery(): Record<string, any> {
        return this._query.toObject();
    }

    getQueryAsString(): string {
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

    setBody(newBody: Record<string, any> | FormData): void {
        if (newBody instanceof FormData) {
            this._bodyIsFormData = true;
            this._body           = newBody;
        } else {
            Object
                .keys(newBody)
                .forEach((key) => {
                    this._body[key] = newBody[key];
                });
        }
    }

    getBody(): Record<string, any> | FormData {
        return this._body;
    }
}
