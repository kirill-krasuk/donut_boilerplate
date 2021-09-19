import axios, { AxiosResponse } from 'axios';
import * as TE                  from 'fp-ts/lib/TaskEither';

import env                      from '@env/';

const { api } = env.client;

const get = <T = any>(url: string) => TE.tryCatch<Error, AxiosResponse<T>>(
    () => axios.get(`${ api }${ url }`),
    reason => new Error(String(reason))
);

const post = <T = any>(url: string) => TE.tryCatch<Error, AxiosResponse<T>>(
    () => axios.post(`${ api }${ url }`),
    reason => new Error(String(reason))
);

export default {
    get,
    post
};
