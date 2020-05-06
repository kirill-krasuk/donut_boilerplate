import R               from 'ramda';

import { EHTTPMethod } from '@core/enums/http';
import { HTTP }        from '@core/services/oldHTTP';
import TokenStorage    from '@core/services/TokenStorage';

type Req = {
    path: string;
    method: EHTTPMethod;
    query?: Record<string, any>;
    auth?: boolean;
};

type Auth = {
    token: string;
}

export async function fetchOne(request: Req, auth?: Auth): Promise<void | Record<string, any>> {
    const {
        path, query, method, auth: reqAuth
    } = request;

    const tokenStorage: typeof TokenStorage = TokenStorage;

    tokenStorage.setToken(R.path([ 'token' ], auth) || '');

    const http: HTTP = new HTTP();

    if (query) {
        http.setQuery(query);
    }

    try {
        const { body } = await http.fetch({
            path,
            method,
            auth: reqAuth
        });

        return body;
    } catch (err) {
        // eslint-disable-next-line
        console.log(err);
    }
}
