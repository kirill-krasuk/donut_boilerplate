import tcpPortUsed                 from 'tcp-port-used';

import type { ServerStartOptions } from '@server/types/server';

type RunServerCallback = (serverOptions: ServerStartOptions) => void;

export function createUsePortHandler({ port, host }: ServerStartOptions, runServerCB: RunServerCallback) {
    return async (error: any) => {
        let p = +port;

        if (error.code === 'EADDRINUSE') {
            // eslint-disable-next-line no-await-in-loop
            while (await tcpPortUsed.check(p, host)) {
                p++;
            }

            runServerCB({ port: p, host, standardPort: port });
        }
    };
}
