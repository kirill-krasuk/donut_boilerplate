import express                      from 'express';

import { HTTPServerAdapter }        from './HTTPServerAdapter';

import type { ViewTemplateOptions } from './types';

const expressInstance = express();

export class ExpressAdapter<
    R = express.Request,
    RS = express.Response
 > extends HTTPServerAdapter<R, RS> {
    public type = 'express';

    constructor() {
        super(expressInstance);
    }

    static async init() {
        await Promise.resolve();

        return new ExpressAdapter();
    }

    registerViewTemplate({ engine, viewsPath }: ViewTemplateOptions) {
        this.instance.set('view engine', engine);
        this.instance.set('views', viewsPath);
    }
}
