/* eslint-disable react-hooks/rules-of-hooks */
import { env }                 from '@env/index';
import { ServerEngineFactory } from '@server/factories/server';

import { ApplicationFacade }   from './app';

export async function bootstrap() {
	const { serverSideEngine, host, port } = env.server;

	try {
		const serverEngineFactory = new ServerEngineFactory();
		const adapter             = await serverEngineFactory.init(serverSideEngine);
		const app                 = new ApplicationFacade(adapter);

		await app.start(port, host);
	} catch (error) {
		console.error(error);
	}
}
