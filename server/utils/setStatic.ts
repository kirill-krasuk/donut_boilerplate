/* eslint-disable react-hooks/rules-of-hooks */
import expressStaticGzip   from 'express-static-gzip';
import { Application }     from 'express';
import path                from 'path';

import { ONE_MONTH_CACHE } from '../constants/cache';
import { useStatic }       from '../utils/useStatic';

export function setStatic(app: Application): void {
    app.use('/dist', useStatic(`${ __dirname  }/../dist`, { maxAge: ONE_MONTH_CACHE }));
    app.use('/sw.js', useStatic(`${ __dirname  }/../dist/sw.js`));
    app.use('/public', expressStaticGzip(path.resolve(`${ __dirname  }/../public`), { enableBrotli: true }));
    app.use('/images', useStatic(`${ __dirname  }/../public/images`, { maxAge: ONE_MONTH_CACHE }));
    app.use('/', useStatic(`${ __dirname  }/../public/root`));
}
