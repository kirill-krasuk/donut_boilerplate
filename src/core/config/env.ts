import * as I                      from 'fp-ts/lib/IO';

import { Env }                     from '@core/types/env';
import { getEnv, getOptionConfig } from '@core/utils/env';

const nodeEnv: I.IO<NodeJS.ProcessEnv> = () => process.env;

const getEnvVar = getEnv(nodeEnv);

// TODO: implement default value
const config: Env = {
    apiHost    : getEnvVar('API_HOST'),
    swEnable   : getEnvVar<boolean>('SERVICE_WORKER_ENABLE'),
    needHydrate: getEnvVar<boolean>('HYDRATE'),
};

const get = getOptionConfig(config);

export { get };
