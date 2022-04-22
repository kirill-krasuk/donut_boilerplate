import expressStaticGzip                from 'express-static-gzip';

import { serveStaticCompressionConfig } from '@server/config/compression';

export const staticCompression = (path: string) => expressStaticGzip(path, {
	enableBrotli   : true,
	orderPreference: [ 'br', 'gzip', 'deflate' ],
	serveStatic    : serveStaticCompressionConfig
});
