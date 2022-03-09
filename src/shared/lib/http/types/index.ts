import { HTTPMethod } from '../enums/http';

export interface RequestExtended extends RequestInit {
    method: HTTPMethod;
    url: string;
}

export type DefaultHeaders = {
    'Content-Type': string,
    Accept: string
}

export type RequestBody =
    ArrayBuffer
    | ArrayBufferView
    | Blob
    | FormData
    | ReadableStream<Uint8Array>
    | URLSearchParams
    | string
    | null
    | undefined

export type UrlORRequest = RequestExtended | string;
