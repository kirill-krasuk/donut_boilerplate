/* eslint-disable unicorn/prefer-object-from-entries */
import dotenv from 'dotenv';

type EnvMap = Record<string, any>;

const createNormalizer = (acc: EnvMap, curr: string) => ({
	toBool: (value: string) => ({
		...acc,
		[curr]: JSON.parse(value)
	}),
	toString: (value?: string) => ({
		...acc,
		[curr]: value
			? `${ value }`
			: null
	})
});

function getEnvironmentVariables() {
	const { parsed } = dotenv.config();

	if (!parsed || !Object.keys(parsed).length) {
		throw new Error('Environment variables are not defined');
	}

	return Object.keys(parsed).reduce((acc: EnvMap, curr) => {
		const envVariable = parsed[curr]!;

		const normalizer = createNormalizer(acc, curr);

		if (/^(\d+|false|true)$/.test(envVariable)) {
			return normalizer.toBool(envVariable);
		}

		return normalizer.toString(envVariable);
	}, {});
}

export { getEnvironmentVariables };
