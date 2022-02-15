import expressStaticGzip      from 'express-static-gzip';

import { serveStaticOptions } from '@server/constants/static';

export const staticCompression = (path: string) => expressStaticGzip(path, {
    enableBrotli   : true,
    orderPreference: [ 'br', 'gzip', 'deflate' ],
    serveStatic    : serveStaticOptions
});
