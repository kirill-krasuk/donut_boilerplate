export type ConfigSchema = {
    readonly [key: string]: (env: NodeJS.ProcessEnv) => string | number | boolean | null
}

export type Config<T extends ConfigSchema> = {
    readonly [key in keyof T]: ReturnType<T[key]>
}
