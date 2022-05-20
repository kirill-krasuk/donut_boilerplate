import { StringFormatter } from '../enums/formatter';
import { snakeToCamel }    from '../functions/snakeToCamel';

describe('snakeToCamel util function', () => {
	it('function must transform snake to camel with lower case', () => {
		const received = 'hello_world';
		const expected = 'helloWorld';

		expect(snakeToCamel(StringFormatter.Lower, received)).toBe(expected);
	});

	it('curried function must transform snake to camel with lower case', () => {
		const received = 'hello_world-2';
		const expected = 'helloWorld2';

		const formatter = snakeToCamel(StringFormatter.Lower);

		expect(formatter(received)).toBe(expected);
	});

	it('function must transform snake to camel with upper case', () => {
		const received = 'hello_world';
		const expected = 'HelloWorld';

		expect(snakeToCamel(StringFormatter.Upper, received)).toBe(expected);
	});
});
