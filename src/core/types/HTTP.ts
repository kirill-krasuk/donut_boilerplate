import { STATUS_CODES } from '@core/constants/http/statusCodes';
import { EHTTPMethod }  from '@core/enums/http';

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
