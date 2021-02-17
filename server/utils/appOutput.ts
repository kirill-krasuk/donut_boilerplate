import dayjs           from 'dayjs';
import chalk           from 'chalk';
import openBrowser     from 'react-dev-utils/openBrowser';
import ip              from 'ip';

import env             from '@server/config';
import { getHostname } from './getHostname';

export type OutputInfo = {
    host: string,
    port: string
};

const { isBuildAnalyzer, analyzerPort } = env;

export const getAppOutputInfo = ({ host, port }: OutputInfo) => {
    let messageAboutBrowser = 'Copy address to clipboard and run it in browser';
    let network             = '';
    const hostname          = getHostname(host);

    if (env.isOpenInBrowser) {
        if (openBrowser(`http://${ hostname }:${ port }`)) {
            messageAboutBrowser = 'The app has been opened in browser!';
        }
    }

    if (hostname === 'localhost') {
        network = ip.address();
    }

    return [
        `${ ' '.repeat(6) }${ chalk.bold('Welcome to DONUT BOILERPLATE 🍩🍩🍩') }`,
        '',
        `${ chalk.green.bold('Server time:') }${ ' '.repeat(5) }${ dayjs(Date.now()).format('HH:mm:ss DD:MM:YYYY') }`,
        '',
        `${ ' '.repeat(12) }${ chalk.gray.bold('Server started at') }`,
        `${ chalk.green.bold('Local:') }${ ' '.repeat(11) }${ chalk.underline.cyan(`http://${ hostname }:${ port }`) }`,
        network && `${ chalk.green.bold('Network:') }${ ' '.repeat(9) }${ chalk.underline.cyan(`http://${ network }:${ port }`) }`,
        __IS_DEV__ && isBuildAnalyzer && `${ chalk.green.bold('Bundle analyzer:') } ${ chalk.underline.cyan(`http://${ getHostname(host) }:${ analyzerPort }`) }`,
        '',
        chalk.gray.bold(messageAboutBrowser)
    ]
        .filter(row => row !== false)
        .map(row => `${ row }\n`)
        .join('');
};
