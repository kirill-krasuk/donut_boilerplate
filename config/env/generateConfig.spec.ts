/* eslint-disable @typescript-eslint/no-namespace */
import { generateConfig }    from './generateConfig';

import type { ConfigSchema } from './types';

interface ProcessEnv {
	VAR1: string;
	VAR2: string;
	VAR3: string;
}

describe('generateConfig', () => {
	it('should return empty object if schema and env is empty', () => {
		const env    = {} as ProcessEnv;
		const schema = {};

		const result = generateConfig(env as any)(schema);

		expect(result).toStrictEqual({});
	});

	it('should result contains from nulls', () => {
		const env    = {} as ProcessEnv;
		const schema = {
			a: () => null ?? '1',
			b: () => null ?? 'false',
			c: () => null ?? 'hello'
		};

		const result = generateConfig(env as any)(schema);

		expect(result).toStrictEqual({ a: 1, b: false, c: 'hello' });
	});

	it('should transform "number" => number', () => {
		const env                  = { VAR1: '1', VAR2: '2', VAR3: '3' };
		const schema: ConfigSchema = {
			a: env => env.VAR1!,
			b: env => env.VAR2!,
			c: env => env.VAR3!
		};

		const result = generateConfig(env)(schema);

		expect(result).toStrictEqual({ a: 1, b: 2, c: 3 });
	});
});
