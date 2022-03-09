export type ConfigSchema = {
    readonly [key: string]: (env: NodeJS.ProcessEnv) => boolean | number | string | null
}

export type Config<T extends ConfigSchema> = {
    readonly [key in keyof T]: ReturnType<T[key]>
}
