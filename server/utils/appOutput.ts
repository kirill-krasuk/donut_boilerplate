import dayjs           from 'dayjs';
import chalk           from 'chalk';

import { getHostname } from './getHostname';

export type OutputInfo = {
    host: string,
    port: string
};

// TODO: need env helpers
const isBundleAnalyzerOn = JSON.parse(process.env.BUILD_ANALYZE || 'false');
const analyzerPort       = process.env.BUNDLE_ANALYZER_PORT;
const isDev              = process.env.NODE_ENV === 'development';

export const getAppOutputInfo = ({ host, port }: OutputInfo) => [
    `      ${ chalk.bold('Welcome to DONUT BOILERPLATE 🍩🍩🍩') }`,
    '',
    `${ chalk.green.bold('Server time:') }     ${ dayjs(Date.now()).format('HH:mm:ss DD:MM:YYYY') }`,
    '',
    `            ${ chalk.gray.bold('Server started at') }`,
    `${ chalk.green.bold('Address:') }         ${ chalk.underline.cyan(`http://${ getHostname(host) }:${ port }`) }`,
    isDev && isBundleAnalyzerOn && `${ chalk.green.bold('Bundle analyzer:') } ${ chalk.underline.cyan(`http://${ getHostname(host) }:${ analyzerPort }`) }`,
    '',
    chalk.gray.bold('Copy address to clipboard and run it in browser')
]
    .filter(row => row !== false)
    .map(row => `${ row }\n`)
    .join('');
