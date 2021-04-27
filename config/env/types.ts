export type ConfigSchema = {
    [key: string]: (env: NodeJS.ProcessEnv) => string | number | boolean
}

export type Config<T extends ConfigSchema> = {
    [key in keyof T]: ReturnType<T[key]>
}
