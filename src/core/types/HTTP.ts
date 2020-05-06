import { STATUS_CODES } from '@core/constants/http/statusCodes';
import { EHTTPMethod }  from '@core/enums/http';

// old types

export type FetchOptions = {
    method: EHTTPMethod;
    path: string;
    requestTo?: string;
    auth?: boolean;
}

export type HTTPResponse = {
    body: Record<string, any>;
    response: Record<string, any>;
}

export type ResponseWithStatusCodes = Response & { status: keyof typeof STATUS_CODES }

// new types

export interface RequestExtended extends RequestInit {
    method: EHTTPMethod;
    url: string;
}

export type DefaultHeaders = {
    'Content-Type': string;
    Accept: string;
}

export type RequestBody = string
    | Blob
    | ArrayBufferView
    | ArrayBuffer
    | FormData
    | URLSearchParams
    | ReadableStream<Uint8Array>
    | null
    | undefined

export type UrlORRequest = string | RequestExtended;
