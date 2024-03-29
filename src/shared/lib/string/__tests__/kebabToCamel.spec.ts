import { StringFormatter } from '../enums/formatter';
import { kebabToCamel }    from '../functions/kebabToCamel';

describe('kebabToCamel util function', () => {
	it('function must transform kebab to camel with lower case', () => {
		const received = 'hello-world';
		const expected = 'helloWorld';

		expect(kebabToCamel(StringFormatter.Lower, received)).toBe(expected);
	});

	it('curried function must transform kebab to camel with lower case', () => {
		const received = 'hello-world-2';
		const expected = 'helloWorld2';

		const formatter = kebabToCamel(StringFormatter.Lower);

		expect(formatter(received)).toBe(expected);
	});

	it('function must transform kebab to camel with upper case', () => {
		const received = 'hello-world';
		const expected = 'HelloWorld';

		expect(kebabToCamel(StringFormatter.Upper, received)).toBe(expected);
	});
});
