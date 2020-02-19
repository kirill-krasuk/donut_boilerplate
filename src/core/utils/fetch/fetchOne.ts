import R                 from 'ramda';

import { HTTP }          from '@core/services/HTTP';
import TokenStorage      from '@core/services/TokenStorage';

type ReqType = {
    path: string;
    method: string;
    query?: Record<string, any>;
    auth?: boolean;
};

type AuthType = {
    token: string;
}

export async function fetchOne(request: ReqType, auth?: AuthType): Promise<void | Record<string, any>> {
    const {
        path, query, method, auth: reqAuth
    } = request;

    const tokenStorage: typeof TokenStorage = TokenStorage;

    tokenStorage.setToken(R.path([ 'token' ], auth) || '');

    const http: HTTP = new HTTP();

    if (query) {
        http.query = query;
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
