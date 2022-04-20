import type { HTTPMethod } from '../enums/http';

interface RequestExtended extends RequestInit {
    method: HTTPMethod;
    url: string;
}

type DefaultHeaders = {
    'Content-Type': string,
    Accept: string
}

type RequestBody =
    ArrayBuffer
    | ArrayBufferView
    | Blob
    | FormData
    | ReadableStream<Uint8Array>
    | URLSearchParams
    | string
    | null
    | undefined

type UrlORRequest = RequestExtended | string;

export type {
    RequestExtended,
    DefaultHeaders,
    RequestBody,
    UrlORRequest
};
