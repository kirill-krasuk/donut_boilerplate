import { ServeStaticOptions } from 'serve-static';

import { headers }            from '../constants/headers';
import { ONE_MONTH_CACHE }    from './cache';

export const serveStaticOptions: ServeStaticOptions = {
    maxAge    : ONE_MONTH_CACHE,
    setHeaders: (res) => {
        res.setHeader(...headers.sw);
        res.setHeader(...headers.isCacheable);
    }
};
