import { camelToSnake } from '../camelToSnake';

describe('camelToSnake utility function', () => {
    it('function mus transformed string correctly with first lower letter case', () => {
        const expected = 'helloWorld';
        const received = 'hello_world';

        expect(received).toEqual(camelToSnake(expected));
    });

    it('funcion must transformed string correctly with first upper letter', () => {
        const expected = 'HelloWorld';
        const received = 'hello_world';

        expect(received).toEqual(camelToSnake(expected));
    });
});
