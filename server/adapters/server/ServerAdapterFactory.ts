import { FastifyAdapter } from './FastifyAdapter';
import { ExpressAdapter } from './ExpressAdapter';

export class ServerAdapterFactory {
	private static adapters = {
		express: ExpressAdapter,
		fastify: FastifyAdapter
	};

	async init(type: keyof typeof ServerAdapterFactory.adapters) {
		return await ServerAdapterFactory.adapters[type].init();
	}
}
