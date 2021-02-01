import dayjs                   from 'dayjs';

import { cyanFont, greenFont } from './console';
import { getHostname }         from './getHostname';

export type OutputInfo = {
    host: string,
    port: string
}

export const getAppOutputInfo = ({ host, port }: OutputInfo) => [
    'Welcome to DONUT BOILERPLATE 🍩🍩🍩',
    '',
    greenFont(`Server time: ${ dayjs(Date.now()).format('HH:mm:ss DD:MM:YYYY') }`),
    '',
    'Server started at',
    `Address: ${ cyanFont(`http://${ getHostname(host) }:${ port }`) }`
]
    .map(row => `${ row }\n`)
    .join('');
