// @flow

export interface iHTTPError {
    _name: string;
    _message: string;
    _response: string;
    _request: string;
    _status: number;
    _body: Object | typeof undefined;

    constructor(response: Response, request: Request, body?: Object): void;

    get body(): Object | typeof undefined;
    get status(): number;

    _formatStack(): string;
}
