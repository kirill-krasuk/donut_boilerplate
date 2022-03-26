import dayjs           from 'dayjs';
import chalk           from 'chalk';
import openBrowser     from 'react-dev-utils/openBrowser';
import ip              from 'ip';

import { env }         from '@env/index';
import { getHostname } from '@server/utils/getHostname';

export type OutputInfo = {
    host: string,
    port: string,
    standardPort?: number | string
};

const { isBuildAnalyzer, analyzerPort, isOpenInBrowser } = env.server;

export const getAppOutputInfo = ({ host, port, standardPort }: OutputInfo) => {
    let messageAboutBrowser = 'Copy address to clipboard and run it in browser';
    let network             = '';
    const hostname          = getHostname(host);

    if (isOpenInBrowser && openBrowser(`http://${ hostname }:${ port }`)) {
        messageAboutBrowser = 'The app has been opened in browser!';
    }

    if (hostname === 'localhost') {
        network = ip.address();
    }

    return [
        chalk`${ ' '.repeat(6) }{bold Welcome to DONUT BOILERPLATE 🍩🍩🍩}`,
        '',
        chalk`{green.bold Server time:}${ ' '.repeat(5) }${ dayjs(Date.now()).format('HH:mm:ss DD:MM:YYYY') }`,
        '',
        !!standardPort && chalk`${ ' '.repeat(13) }{yellow.bold !!!Attention!!!}`,
        !!standardPort && chalk`Port from {bold ENV} {cyan.bold ${ standardPort }} is busy. Use {cyan.bold ${ port }} instead`,
        !!standardPort && '',
        chalk`${ ' '.repeat(12) }{gray.bold Server started at}`,
        chalk`{green.bold Local:}${ ' '.repeat(11) }{underline.cyan http://${ hostname }:${ port }}`,
        network && chalk`{green.bold Network:}${ ' '.repeat(9) }{underline.cyan http://${ network }:${ port }}`,
        __IS_DEV__ && isBuildAnalyzer && chalk`{green.bold Bundle analyzer:} {underline.cyan http://${ getHostname(host) }:${ analyzerPort }}`,
        '',
        chalk`{gray.bold ${ messageAboutBrowser }}`
    ]
        .filter(row => row !== false)
        .map(row => `${ row }\n`)
        .join('');
};
