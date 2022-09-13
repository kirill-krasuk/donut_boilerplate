import express                      from 'express';

import { HTTPServerAdapter }        from './HTTPServerAdapter';

import type { ViewTemplateOptions } from './types';

const expressInstance = express();

export class ExpressAdapter<
	R = express.Request,
	RS = express.Response
> extends HTTPServerAdapter<R, RS> {
	type = 'express';

	constructor() {
		super(expressInstance);
	}

	async init() {
		return this;
	}

	registerViewTemplate({ engine, viewsPath }: ViewTemplateOptions) {
		this.instance.set('view engine', engine);
		this.instance.set('views', viewsPath);
	}
}
