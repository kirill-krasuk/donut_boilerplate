export class HTTPError extends Error {
    _name: string;
    _message: string;
    _response: string;
    _request: string;
    _status: number;
    _body: Record<string, any> | typeof undefined;

    constructor(response: Response, request: Request, body?: Record<string, any>) {
        const message = `HTTPError: ${ response.status } ${ response.status }`;
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

    getBody(): Record<string, any> | typeof undefined {
        return this._body;
    }

    getStatus(): number {
        return this._status;
    }

    _formatStack(): string {
        if (this.stack) {
            return this.stack.replace(/.*[\n\r]*/, '');
        }

        return 'Error getting stack';
    }
}
