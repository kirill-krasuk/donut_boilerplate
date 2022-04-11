import { camelToKebab } from '../functions/camelToKebab';

describe('camelToKebab utility function', () => {
    it('function mus transformed string correctly with first lower letter case', () => {
        const received = 'helloWorld';
        const expected = 'hello-world';

        expect(camelToKebab(received)).toBe(expected);
    });

    it('function must transformed string correctly with first upper letter', () => {
        const received = 'HelloWorld';
        const expected = 'hello-world';

        expect(camelToKebab(received)).toBe(expected);
    });
});
