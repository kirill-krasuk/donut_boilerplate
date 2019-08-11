// @flow
import { STATUS_CODES }    from 'core/constants/http/statusCodes';
import type { iHTTPError } from 'core/interfaces/HTTPError';

export class HTTPError extends Error implements iHTTPError {
    _name: string;

    _message: string;

    _response: string;

    _request: string;

    _status: number;

    _body: Object | typeof undefined;

    constructor(response: Response, request: Request, body?: Object): void {
        const message: string    = `HTTPError: ${ response.status } ${ STATUS_CODES[response.status] || response.status }`;
        super(message);

        const stackTrace: string = this._formatStack();

        this._name     = this.constructor.name;
        this._message  = message;
        this._response = `Response status: ${ response.status }`;
        this._status   = response.status;
        this._request  = `${ request.method } ${ request.url }`;
        this._body     = body;

        this.stack = `${ this._message }\nError in ${ this._request }\n${ this._response }\n${ stackTrace }`;
    }

    get body(): Object | typeof undefined {
        return this._body;
    }

    get status(): number {
        return this._status;
    }

    _formatStack(): string {
        return this.stack.replace(/.*[\n\r]*/, '');
    }
}
