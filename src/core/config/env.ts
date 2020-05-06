import * as I                      from 'fp-ts/lib/IO';

import { Env }                     from '@core/types/env';
import { getEnv, getOptionConfig } from '@core/utils/env';

const nodeEnv: I.IO<NodeJS.ProcessEnv> = () => process.env;

const getEnvVar = getEnv(nodeEnv);

const config: Env = {
    apiHost    : getEnvVar('API_HOST', 'https://jsonplaceholder.typicode.com'),
    swEnable   : getEnvVar<boolean>('SERVICE_WORKER_ENABLE'),
    needHydrate: getEnvVar<boolean>('HYDRATE'),
};

const get = getOptionConfig(config);

export { get };
