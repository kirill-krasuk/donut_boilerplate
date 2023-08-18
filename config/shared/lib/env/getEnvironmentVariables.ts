type EnvMap = Record<string, any>;

const createNormalizer = (acc: EnvMap, curr: string) => ({
	toBool: (value: string) => ({
		...acc,
		[curr]: JSON.parse(value)
	}),
	toString: (value?: string) => ({
		...acc,
		[curr]: value
			? `"${ value }"`
			: null
	})
});

function getEnvironmentVariables(env: EnvMap) {
	if (!env || !Object.keys(env).length) {
		throw new Error('Environment variables are not defined');
	}

	return Object.keys(env).reduce((acc: EnvMap, curr) => {
		const envVariable = env[curr]!;

		const normalizer = createNormalizer(acc, curr);

		if (/^(\d+|false|true)$/.test(envVariable)) {
			return normalizer.toBool(envVariable);
		}

		return normalizer.toString(envVariable);
	}, {});
}

export { getEnvironmentVariables };
