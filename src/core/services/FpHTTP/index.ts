import axios, { AxiosResponse } from 'axios';
import * as TE                  from 'fp-ts/lib/TaskEither';

import * as Env                 from '@core/config/env';

const host = Env.get('apiHost');

const get = <T = any>(url: string) => TE.tryCatch<Error, AxiosResponse<T>>(
    () => axios.get(`${ host }${ url }`),
    reason => new Error(String(reason))
);

const post = <T = any>(url: string) => TE.tryCatch<Error, AxiosResponse<T>>(
    () => axios.post(`${ host }${ url }`),
    reason => new Error(String(reason))
);

export default {
    get,
    post
};
