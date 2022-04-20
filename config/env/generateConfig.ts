import type { Config, ConfigSchema } from './types';

export function generateConfig(env: NodeJS.ProcessEnv) {
    return function <T extends ConfigSchema> (configSchema: T): Config<T> {
        return Object
            .keys(configSchema)
            .reduce((config, currentItem) => ({
                ...config,
                [currentItem]: configSchema[currentItem](env)
            }), {} as Config<T>);
    };
}
