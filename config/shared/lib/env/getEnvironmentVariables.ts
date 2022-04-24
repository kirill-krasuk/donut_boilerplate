/* eslint-disable unicorn/prefer-object-from-entries */
import dotenv from 'dotenv';

const { parsed } = dotenv.config();

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

function getEnvironmentVariables() {
	return Object.keys(parsed || {}).reduce((acc: EnvMap, curr) => {
		const envVariable = process.env[curr]!;

		const normalizer = createNormalizer(acc, curr);

		if (/^(\d+|false|true)$/.test(envVariable)) {
			return normalizer.toBool(envVariable);
		}

		return normalizer.toString(envVariable);
	}, {});
}

export { getEnvironmentVariables };
