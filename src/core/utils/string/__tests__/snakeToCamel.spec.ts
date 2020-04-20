import { EStringFormatter } from '@core/enums/string';
import { snakeToCamel }     from '../snakeToCamel';

describe('snakeToCamel util function', () => {
    it('function must transform snake to camel with lower case', () => {
        const received = 'hello_world';
        const expected = 'helloWorld';

        expect(snakeToCamel(EStringFormatter.Lower, received)).toEqual(expected);
    });

    it('function must transform snake to camel with upper case', () => {
        const received = 'hello_world';
        const expected = 'HelloWorld';

        expect(snakeToCamel(EStringFormatter.Upper, received)).toEqual(expected);
    });
});
