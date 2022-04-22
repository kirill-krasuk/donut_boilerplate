import { serverScheme, clientScheme } from './scheme';
import { generateConfig }             from './generateConfig';

const generateEnvByScheme = generateConfig(process.env);

const env = {
	client: generateEnvByScheme(clientScheme),
	server: generateEnvByScheme(serverScheme)
};

export { env };
