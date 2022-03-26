import { ServeStaticOptions } from 'serve-static';

import { headers }            from '@server/constants/headers';
import { ONE_MONTH_CACHE }    from '@server/constants/cache';

export const serveStaticCompressionConfig: ServeStaticOptions = {
    maxAge    : ONE_MONTH_CACHE,
    setHeaders: (res) => {
        res.setHeader(...headers.sw);
        res.setHeader(...headers.isCacheable);
    }
};
