/* eslint-disable react-hooks/rules-of-hooks */
import { env }                 from '@env/index';
import { ServerEngineFactory } from '@server/factories/server';

import { ApplicationBuilder }  from './app';

export async function bootstrap() {
	const { serverSideEngine, host, port } = env.server;

	const adapter = await new ServerEngineFactory().init(serverSideEngine);
	const app     = new ApplicationBuilder(adapter);

	await app.build();

	app.start(port, host);
}
