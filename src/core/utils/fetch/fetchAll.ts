import R            from 'ramda';

import { HTTP }     from '@core/services/HTTP';
import TokenStorage from '@core/services/TokenStorage';

type Reqs = Array<{
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    auth?: boolean;
    query?: Record<string, any>;
}>;

type Auth = {
    token: string;
}

export async function fetchAll(requests: Reqs, auth?: Auth): Promise<any[]> {
    const tokenStorage: typeof TokenStorage = TokenStorage;

    tokenStorage.setToken(R.path([ 'token' ], auth) || '');

    const promises = requests.map((req) => {
        const http: HTTP = new HTTP();

        if (req.query) {
            http.query = req.query;
        }

        return http.fetch({
            path  : req.path,
            method: req.method,
            auth  : req.auth
        });
    });

    const responses: { status: string; value: any }[] = await Promise.allSettled(promises);

    return responses.map((res) => {
        if (res.status === 'rejected') {
            return null;
        }

        const { body } = res.value;

        return body;
    });
}
