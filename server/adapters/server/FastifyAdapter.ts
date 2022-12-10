import fastify                               from 'fastify';
import pug                                   from 'pug';
import fastifyExpress                        from '@fastify/express';
import pointOfView                           from 'point-of-view';

import { HTTPServerAdapter }                 from './HTTPServerAdapter';

import type { FastifyRequest, FastifyReply } from 'fastify';
import type { ViewTemplateOptions }          from './types';

// TODO: refactoring and support more templates
const templateEngines: Record<string, unknown> = {
	pug
};

const fastifyInstance = fastify();

export class FastifyAdapter<
	R = FastifyRequest,
	RS = FastifyReply
> extends HTTPServerAdapter<R, RS> {
	type = 'fastify';

	constructor() {
		super(fastifyInstance);
	}

	override async init() {
		await fastifyInstance.register(fastifyExpress);

		return this;
	}

	render(response: any, view: string, options: any) {
		return response?.view(view, options);
	}

	override registerViewTemplate({ engine, viewsPath }: ViewTemplateOptions) {
		this.instance.register(pointOfView, {
			engine: {
				[engine]: templateEngines[engine]
			},
			root: viewsPath
		});
	}
}
