import { Express }            from 'express';
import tcpPortUsed            from 'tcp-port-used';

import { appOutput }          from '@server/lib/console';
import { ServerStartOptions } from '@server/types/server';

export async function createServerRunnerPromise(appInstance: Express, standardPort: number | string, host: string) {
    let port = +standardPort;

    // eslint-disable-next-line no-await-in-loop
    while (await tcpPortUsed.check(port, host)) {
        port++;
    }

    appInstance.listen(port, host, () => appOutput({
        host,
        standardPort: standardPort.toString(),
        port        : port.toString()
    }));
}

export function createServerRunner(appInstance: Express) {
    return function (serverParams: ServerStartOptions) {
        const { host, port, standardPort } = serverParams;

        // eslint-disable-next-line sonarjs/no-identical-functions
        return appInstance.listen(+port, host, () => appOutput({
            host,
            standardPort: standardPort?.toString(),
            port        : port.toString()
        }));
    };
}
