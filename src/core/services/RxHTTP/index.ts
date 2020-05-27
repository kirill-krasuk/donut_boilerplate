import {
    Observable,
    from,
    of,
    throwError
} from 'rxjs';
import { fromFetch }                                 from 'rxjs/fetch';
import { switchMap }                                 from 'rxjs/operators';
import * as O                                        from 'fp-ts/lib/Option';
import { pipe }                                      from 'fp-ts/lib/pipeable';
import R                                             from 'ramda';

import { HTTPMethod }                                from '@core/enums/http';
import * as Env                                      from '@core/config/env';
import { DefaultHeaders, UrlORRequest, RequestBody } from '@core/types/HTTP';

const apiHost = () => Env.get('apiHost');

const setUrl = (route?: string) => pipe(
    O.fromNullable(route),
    O.fold(
        () => apiHost(),
        (route) => apiHost() + route
    )
);

const setHeaders = (headers?: object | DefaultHeaders) => {
    const defaultHeaders = {
        'Content-Type': 'application/json',
        Accept        : 'application/json'
    };

    return pipe(
        O.fromNullable(headers),
        O.fold(
            () => defaultHeaders,
            (headers) => R.mergeDeepRight(
                defaultHeaders,
                headers
            )
        )
    );
};

const getRequestPayload = (urlOrRequest: UrlORRequest) => (
    typeof urlOrRequest === 'string'
        ? {
            method : HTTPMethod.Get,
            headers: setHeaders()
        }
        : {
            ...urlOrRequest,
            headers: setHeaders(urlOrRequest.headers)
        }
);

const getUrl = (urlOrRequest: UrlORRequest) => (typeof urlOrRequest === 'string' ? urlOrRequest : urlOrRequest.url);

const request$ = <T = any>(urlOrRequest: UrlORRequest): Observable<string | { response: Response; data: T }> => fromFetch(
    setUrl(getUrl(urlOrRequest)),
    getRequestPayload(urlOrRequest)
).pipe(
    switchMap((response) => from(response.json()).pipe(
        switchMap(json => {
            if (!response.ok) {
                return throwError({
                    status    : response.status,
                    message   : json,
                    statusText: response.statusText
                });
            }

            return of({ response, data: json });
        })
    )),
);

const get$ = <T = any>(path: string, headers?: object) => request$<T>({
    url    : path,
    method : HTTPMethod.Get,
    headers: setHeaders(headers)
});

const post$ = <T = any>(path: string, body?: RequestBody, headers?: object) => request$<T>({
    url    : path,
    method : HTTPMethod.Post,
    headers: setHeaders(headers),
    body
});

const put$ = <T = any>(path: string, body?: RequestBody, headers?: object) => request$<T>({
    url    : path,
    method : HTTPMethod.Put,
    headers: setHeaders(headers),
    body
});

const delete$ = <T = any>(path: string, body?: RequestBody, headers?: object) => request$<T>({
    url    : path,
    method : HTTPMethod.Delete,
    headers: setHeaders(headers),
    body
});

export default Object.assign(
    request$,
    {
        get   : get$,
        post  : post$,
        put   : put$,
        delete: delete$
    }
);
