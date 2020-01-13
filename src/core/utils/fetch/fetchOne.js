// @flow
import * as R                 from 'ramda';

import type { iHTTP }         from 'core/interfaces/HTTP';
import type { iTokenStorage } from 'core/interfaces/TokenStorage';
import { HTTP }               from 'core/services/HTTP';
import TokenStorage           from 'core/services/TokenStorage';

type ReqType = {|
    path: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    query?: Object,
    auth?: boolean
|};

type AuthType = {|
    token: string
|}

export async function fetchOne(request: ReqType, auth?: AuthType) {
    const {
        path, query, method, auth: reqAuth
    } = request;

    const tokenStorage: iTokenStorage = TokenStorage;

    tokenStorage.token = R.path([ 'token' ], auth) || '';

    const http: iHTTP = new HTTP();

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
