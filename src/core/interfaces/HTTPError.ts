export interface HTTPError {
    _name: string;
    _message: string;
    _response: string;
    _request: string;
    _status: number;
    _body: Record<string, any> | typeof undefined;

    getBody(): Record<string, any> | typeof undefined;
    getStatus(): number;

    _formatStack(): string;
}
