import openBrowser     from 'react-dev-utils/openBrowser';
import chalk           from 'chalk';

import env             from '@server/config';
import { getHostname } from './getHostname';

export function openInBrowser({ host, port }: { host: string, port: string }) {
    if (env.isOpenInBrowser) {
        if (openBrowser(`http://${ getHostname(host) }:${ port }`)) {
            console.info(`${ chalk.black.bgBlue.bold(' INFO ') } The app has been opened in browser!`);
        }
    }
}
