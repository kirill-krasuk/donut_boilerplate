import dayjs           from 'dayjs';
import chalk           from 'chalk';

import env             from '@server/config';
import { getHostname } from './getHostname';

export type OutputInfo = {
    host: string,
    port: string
};

const { isBuildAnalyzer, analyzerPort } = env;
const isDev                             = env.env === 'development';

export const getAppOutputInfo = ({ host, port }: OutputInfo) => [
    `      ${ chalk.bold('Welcome to DONUT BOILERPLATE 🍩🍩🍩') }`,
    '',
    `${ chalk.green.bold('Server time:') }     ${ dayjs(Date.now()).format('HH:mm:ss DD:MM:YYYY') }`,
    '',
    `            ${ chalk.gray.bold('Server started at') }`,
    `${ chalk.green.bold('Address:') }         ${ chalk.underline.cyan(`http://${ getHostname(host) }:${ port }`) }`,
    isDev && isBuildAnalyzer && `${ chalk.green.bold('Bundle analyzer:') } ${ chalk.underline.cyan(`http://${ getHostname(host) }:${ analyzerPort }`) }`,
    '',
    chalk.gray.bold('Copy address to clipboard and run it in browser')
]
    .filter(row => row !== false)
    .map(row => `${ row }\n`)
    .join('');
