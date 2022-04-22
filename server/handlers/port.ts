import tcpPortUsed                 from 'tcp-port-used';

import type { ServerStartOptions } from '@server/types/server';

type RunServerCallback = (serverOptions: ServerStartOptions) => void;

export function createUsePortHandler(
	serverOptions: ServerStartOptions,
	runServerCB: RunServerCallback
) {
	const { port, host } = serverOptions;

	return async (error: any) => {
		let p = +port;

		if (error.code === 'EADDRINUSE') {
			// eslint-disable-next-line no-await-in-loop
			while (await tcpPortUsed.check(p, host)) {
				p++;
			}

			runServerCB({
				port        : p,
				host,
				standardPort: port
			});
		}
	};
}
