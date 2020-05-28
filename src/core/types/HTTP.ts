import { HTTPMethod } from '@core/enums/http';
import request$       from '@core/services/RequestManager';

export interface RequestExtended extends RequestInit {
    method: HTTPMethod;
    url: string;
}

export type DefaultHeaders = {
    'Content-Type': string;
    Accept: string;
}

export type RequestBody =
    | string
    | Blob
    | ArrayBufferView
    | ArrayBuffer
    | FormData
    | URLSearchParams
    | ReadableStream<Uint8Array>
    | null
    | undefined

export type UrlORRequest = string | RequestExtended;

export type RequestObservable = typeof request$;
