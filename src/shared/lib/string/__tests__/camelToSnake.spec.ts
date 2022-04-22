import { camelToSnake } from '../functions/camelToSnake';

describe('camelToSnake utility function', () => {
	it('function mus transformed string correctly with first lower letter case', () => {
		const received = 'helloWorld';
		const expected = 'hello_world';

		expect(camelToSnake(received)).toBe(expected);
	});

	it('function must transformed string correctly with first upper letter', () => {
		const received = 'HelloWorld';
		const expected = 'hello_world';

		expect(camelToSnake(received)).toBe(expected);
	});

	it('function must transformed path correctly', () => {
		const received = 'path/HelloWorld/file';
		const expected = 'path/hello_world/file';

		expect(camelToSnake(received)).toBe(expected);
	});

	it('function must transformed path correctly to lower case', () => {
		const received = 'path/Hello/file';
		const expected = 'path/hello/file';

		expect(camelToSnake(received)).toBe(expected);
	});
});
