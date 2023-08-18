import dotenv                      from 'dotenv';

import { getEnvironmentVariables } from './getEnvironmentVariables';

jest.mock('dotenv', () => {
	let parsed: Record<string, any> | null = null; // Инициализация состояния parsed

	return {
		config   : jest.fn().mockImplementation(() => ({ parsed })),
		setParsed: (newParsed: Record<string, any>) => {
			// Функция для установки значения parsed
			parsed = newParsed;
		}
	};
});

describe('getEnvironmentVariables', () => {
	beforeEach(() => {
		jest.resetModules();
		jest.clearAllMocks();
	});

	it('should throw error on empty config', () => {
		expect(() => getEnvironmentVariables()).toThrow();
	});

	it('should transform "boolean" => boolean', () => {
		dotenv.setParsed({
			TEST_BOOL_TRUE : 'true',
			TEST_BOOL_FALSE: 'false'
		});

		const result = getEnvironmentVariables();

		expect(result).toStrictEqual({
			TEST_BOOL_TRUE : true,
			TEST_BOOL_FALSE: false
		});
	});

	it('should transform "number" => number', () => {
		dotenv.setParsed({
			TEST_NUMBER: '1',
			TEST_PORT  : '3000',
			TEST_HOST  : '127.0.0.1'
		});

		const result = getEnvironmentVariables();

		expect(result).toStrictEqual({
			TEST_NUMBER: 1,
			TEST_PORT  : 3000,
			TEST_HOST  : '127.0.0.1'
		});
	});
});
