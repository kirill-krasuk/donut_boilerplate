// @flow
import * as R                 from 'ramda';

import type { iHTTP }         from 'core/interfaces/HTTP';
import type { iTokenStorage } from 'core/interfaces/TokenStorage';
import { HTTP }               from 'core/services/HTTP';
import TokenStorage           from 'core/services/TokenStorage';

type ReqsType = Array<{|
    path: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    auth?: boolean,
    query?: Object
|}>;

type AuthType = {|
    token: string
|}

export async function fetchAll(requests: ReqsType, auth?: AuthType) {
    const tokenStorage: iTokenStorage = TokenStorage;

    tokenStorage.token = R.path([ 'token' ], auth) || '';

    const promises = requests.map((req) => {
        const http: iHTTP = new HTTP();

        if (req.query) {
            http.query = req.query;
        }

        return http.fetch({
            path  : req.path,
            method: req.method,
            auth  : req.auth
        });
    });

    // flow-disable-next-line
    const responses = await Promise.allSettled(promises);

    return responses.map((res) => {
        if (res.status === 'rejected') {
            return null;
        }

        const { body } = res.value;

        return body;
    });
}
