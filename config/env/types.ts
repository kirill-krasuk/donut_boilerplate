type ConfigSchema = {
    readonly [key: string]: (env: NodeJS.ProcessEnv) => boolean | number | string | null
}

type Config<T extends ConfigSchema> = {
    readonly [key in keyof T]: ReturnType<T[key]>
}

export type {
    ConfigSchema,
    Config
};
