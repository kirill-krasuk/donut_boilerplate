import { getEnv } from '@server/utils/getEnv';

export default {
    env : getEnv('NODE_ENV', 'production'),
    host: getEnv('HOST', '127.0.0.1'),
    port: getEnv('PORT', '3000')
};
