import * as IO                     from 'fp-ts/lib/IO';

import { Env }                     from '@core/types/env';
import { getEnv, getOptionConfig } from '@core/utils/env';
import { Environment }             from '@core/enums/env';

const nodeEnv: IO.IO<NodeJS.ProcessEnv> = () => process.env;

const getEnvVar = getEnv(nodeEnv);

const config: Env = {
    apiHost    : getEnvVar('API_HOST', 'https://jsonplaceholder.typicode.com'),
    swEnable   : getEnvVar<boolean>('SERVICE_WORKER_ENABLE'),
    needHydrate: getEnvVar<boolean>('HYDRATE'),
    appEnv     : getEnvVar('NODE_ENV', Environment.Dev)
};

const get = getOptionConfig(config);

export { get };
