export type GetType = 'GET' | 'get';
export type PostType = 'POST' | 'post';
export type PutType = 'PUT' | 'put';
export type DeleteType = 'DELETE' | 'delete';

export type HTTPMethod = GetType | PostType | PutType | DeleteType;

export type FetchOptions = {
    method: HTTPMethod;
    path: string;
    requestTo?: string;
    auth?: boolean;
}

export type HTTPResponse = {
    body: Record<string, any>;
    response: Record<string, any>;
}