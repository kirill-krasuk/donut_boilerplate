/* eslint-disable react-hooks/rules-of-hooks */
import { env }                  from '@env/index';
import { ServerAdapterFactory } from '@server/adapters/server';

import { Application }          from './app';

export async function bootstrap() {
    const adapter        = await new ServerAdapterFactory().init('fastify');
    const app            = new Application(adapter);
    const { host, port } = env.server;

    await app.build();

    app.start(port, host);
}
