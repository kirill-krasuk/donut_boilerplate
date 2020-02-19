import * as string from '.';

describe('String utils', () => {
    describe('Camel to snake transformer', () => {
        const { camelToSnake } = string;

        it('the function should return a snake string', () => {
            const str = 'HomePage';

            const actual   = camelToSnake(str);
            const expected = 'home_page';

            expect(actual).toEqual(expected);
        });

        it('the function should return a string in the form of a snake with a number', () => {
            const str = 'Home2Page3';

            const actual   = camelToSnake(str);
            const expected = 'home_2_page_3';

            expect(actual).toEqual(expected);
        });

        it('the function should return a string in the form of a snake if number is first char', () => {
            const str = '2HomePage3';

            const actual   = camelToSnake(str);
            const expected = '2_home_page_3';

            expect(actual).toEqual(expected);
        });
    });

    describe('Snake to camel transformer', () => {
        const { snakeToCamel } = string;

        it('the function should transform string from snake to camel', () => {
            const str = 'home_page';

            const actual   = snakeToCamel(str);
            const expected = 'homePage';

            expect(actual).toEqual(expected);
        });

        it('the function should transform string from snake to camel with numbers', () => {
            const str = '1_home_page_2';

            const actual   = snakeToCamel(str);
            const expected = '1HomePage2';

            expect(actual).toEqual(expected);
        });

        it('the function should transform string from snake to camel with upper formatter', () => {
            const str = 'home_3_page';

            const actual   = snakeToCamel(str, 'upper');
            const expected = 'Home3Page';

            expect(actual).toEqual(expected);
        });
    });
});
