import { getEnvironmentVariables } from './getEnvironmentVariables';

describe('getEnvironmentVariables', () => {
	beforeEach(() => {
		jest.resetModules();
		jest.clearAllMocks();
	});

	it('should throw error on empty config', () => {
		expect(() => getEnvironmentVariables({})).toThrow();
	});

	it('should transform "boolean" => boolean', () => {
		const result = getEnvironmentVariables({
			TEST_BOOL_TRUE : 'true',
			TEST_BOOL_FALSE: 'false'
		});

		expect(result).toStrictEqual({
			TEST_BOOL_TRUE : true,
			TEST_BOOL_FALSE: false
		});
	});

	it('should transform "number" => number', () => {
		const result = getEnvironmentVariables({
			TEST_NUMBER: '1',
			TEST_PORT  : '3000',
			TEST_HOST  : '127.0.0.1'
		});

		expect(result).toStrictEqual({
			TEST_NUMBER: 1,
			TEST_PORT  : 3000,
			TEST_HOST  : '"127.0.0.1"'
		});
	});
});
