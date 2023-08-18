import type { Config, ConfigSchema } from './types';

const JSONValueNormalizer = {
	parseBoolOrInt: (value: string) => JSON.parse(value),
	parseString   : (value?: string) => (value
		? `${ value }`
		: null)
};

function generateConfig(env: Readonly<NodeJS.ProcessEnv>) {
	return function <T extends ConfigSchema> (configSchema: T): Config<T> {
		return Object.keys(configSchema).reduce((config, currentItem) => {
			const { parseBoolOrInt, parseString } = JSONValueNormalizer;

			let envValue = configSchema[currentItem](env);

			if (typeof envValue === 'string') {
				envValue = /^(\d+|false|true)$/.test(envValue)
					? parseBoolOrInt(envValue)
					: parseString(envValue);
			}

			return {
				...config,
				[currentItem]: envValue
			};
		}, {} as Config<T>);
	};
}

export { generateConfig };
