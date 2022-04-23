import expressStaticGzip                from 'express-static-gzip';

import { serveStaticCompressionConfig } from '@server/config/compression';

const staticCompression = (path: string) =>
	expressStaticGzip(path, {
		enableBrotli   : true,
		orderPreference: [ 'br', 'gzip', 'deflate' ],
		serveStatic    : serveStaticCompressionConfig
	});

export { staticCompression };
