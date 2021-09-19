import { serverScheme, clientScheme } from './scheme';
import { generateConfig }             from './generateConfig';

const generateEnvByScheme = generateConfig(process.env);

export default {
    client: generateEnvByScheme(clientScheme),
    server: generateEnvByScheme(serverScheme)
};
