import tcpPortUsed                 from 'tcp-port-used';

import { appOutput }               from '@server/lib/console';

import type { Express }            from 'express';
import type { ServerStartOptions } from '@server/types/server';

async function createServerRunnerPromise(
	appInstance: Express,
	standardPort: number | string,
	host: string
) {
	let port = +standardPort;

	// eslint-disable-next-line no-await-in-loop
	while (await tcpPortUsed.check(port, host)) {
		port++;
	}

	appInstance.listen(port, host, () => {
		if (process.env.KILL_ON_READY) {
			setTimeout(() => {
				process.exit(0);
			}, 2000);
		}

		appOutput({
			host,
			standardPort: standardPort.toString(),
			port        : port.toString()
		});
	});
}

function createServerRunner(appInstance: Express) {
	return function (serverParameters: ServerStartOptions) {
		const { host, port, standardPort } = serverParameters;

		// eslint-disable-next-line sonarjs/no-identical-functions
		return appInstance.listen(+port, host, () =>
			appOutput({
				host,
				standardPort: standardPort?.toString(),
				port        : port.toString()
			})
		);
	};
}

export { createServerRunner, createServerRunnerPromise };
