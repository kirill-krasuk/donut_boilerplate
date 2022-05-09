/* eslint-disable react-hooks/rules-of-hooks */
import { env }                  from '@env/index';
import { ServerAdapterFactory } from '@server/adapters/server';

import { ApplicationBuilder }   from './app';

export async function bootstrap() {
	const { serverSideEngine, host, port } = env.server;

	const adapter = await new ServerAdapterFactory().init(serverSideEngine);
	const app     = new ApplicationBuilder(adapter);

	await app.build();

	app.start(port, host);
}
