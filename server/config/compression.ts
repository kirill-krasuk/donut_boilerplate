import { headers }                 from '@server/constants/headers';
import { ONE_YEAR_CACHE }          from '@server/constants/cache';

import type { ServeStaticOptions } from 'serve-static';

const serveStaticCompressionConfig: ServeStaticOptions = {
	maxAge    : ONE_YEAR_CACHE,
	setHeaders: res => {
		res.setHeader(...headers.sw);
		res.setHeader(...headers.isCacheable);
	}
};

export { serveStaticCompressionConfig };
