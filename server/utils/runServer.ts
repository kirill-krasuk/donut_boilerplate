import { Express }            from 'express';
import { appBorder }          from '@server/utils/appBorder';
import { getAppOutputInfo }   from '@server/utils/appOutput';
import { ServerStartOptions } from '@server/types/server';

export function createServerRunner(appInstance: Express) {
    return function (serverParams: ServerStartOptions) {
        const { host, port, standardPort } = serverParams;

        return appInstance.listen(+port, host, () => appBorder(getAppOutputInfo({
            host,
            standardPort,
            port: port.toString()
        })));
    };
}
