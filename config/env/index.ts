import { serverScheme, clientScheme } from './scheme';
import { generateConfig }             from './generateConfig';

const generateEnvByScheme = generateConfig(process.env);

export const env = {
    client: generateEnvByScheme(clientScheme),
    server: generateEnvByScheme(serverScheme)
};
