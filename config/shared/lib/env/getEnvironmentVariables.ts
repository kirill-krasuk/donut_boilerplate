/* eslint-disable unicorn/prefer-object-from-entries */
import dotenv from 'dotenv';

const { parsed } = dotenv.config();

function getEnvironmentVariables() {
	return Object.keys(parsed || {}).reduce((acc: Record<string, any>, curr) => {
		const envVariable = process.env[curr]!;

		if (/^(\d+|false|true)$/.test(envVariable)) {
			return {
				...acc,
				[curr]: JSON.parse(envVariable)
			};
		}

		return {
			...acc,
			[curr]: envVariable ? `"${ envVariable }"` : null
		};
	}, {});
}

export { getEnvironmentVariables };
