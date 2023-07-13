type ConfigSchema = Readonly<
	Record<string, (env: NodeJS.ProcessEnv) => boolean | number | string | null>
>;

type NormalizedValue<T extends boolean | number | string | null> = T extends string
	? T extends `${ number }`
		? number
		: T
	: T extends `${ boolean }`
	? boolean
	: T;

type Config<T extends ConfigSchema> = {
	readonly [key in keyof T]: NormalizedValue<ReturnType<T[key]>>;
};

export type { ConfigSchema, Config };
