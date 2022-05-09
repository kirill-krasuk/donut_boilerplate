import { ExpressAdapter } from '../../adapters/server/ExpressAdapter';
import { FastifyAdapter } from '../../adapters/server/FastifyAdapter';

export class ServerEngineFactory {
	private static adapters = {
		express: ExpressAdapter,
		fastify: FastifyAdapter
	};

	async init(type: keyof typeof ServerEngineFactory.adapters) {
		return await ServerEngineFactory.adapters[type].init();
	}
}
