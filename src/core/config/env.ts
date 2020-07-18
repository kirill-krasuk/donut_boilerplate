import * as IO                     from 'fp-ts/lib/IO';

import { Env }                     from '@core/types/env';
import { getEnv, getOptionConfig } from '@utils/env';
import { Environment }             from '@core/enums/env';

const nodeEnv: IO.IO<NodeJS.ProcessEnv> = () => process.env;

const getEnvVar = getEnv(nodeEnv);

const config: Env = {
    apiHost    : getEnvVar('API_HOST', 'https://jsonplaceholder.typicode.com'),
    swEnable   : getEnvVar('SERVICE_WORKER_ENABLE', false),
    needHydrate: getEnvVar('HYDRATE', true),
    appEnv     : getEnvVar('NODE_ENV', Environment.Dev)
};

const get = getOptionConfig(config);

export { get };
