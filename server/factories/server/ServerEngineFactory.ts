import { ExpressAdapter } from '../../adapters/server/ExpressAdapter';
import { FastifyAdapter } from '../../adapters/server/FastifyAdapter';

const adapters = {
	express: new ExpressAdapter(),
	fastify: new FastifyAdapter()
};

type ServerAdaptersMap = keyof typeof adapters;

export class ServerEngineFactory {
	async init(type: ServerAdaptersMap) {
		return await adapters[type].init();
	}
}
