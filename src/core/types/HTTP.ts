import { STATUS_CODES } from '@core/constants/http/statusCodes';
import { EHTTPMethod }  from '@core/enums/http';

export type ResponseWithStatusCodes = Response & { status: keyof typeof STATUS_CODES }

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
