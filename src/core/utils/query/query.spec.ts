import { mockQueryObject }        from '@test/__mocks__/queryObject';
import { mockQueryString }        from '@test/__mocks__/queryString';
import { transformQueryToObject } from './transformQueryToObject';
import { transformObjectToQuery } from './transformObjectToQuery';

describe('Query utils', () => {
// TODO: need to fix helper
    describe.skip('Utils transform query to object', () => {
        it('Must transform query to correct object', () => {
            const obj = transformQueryToObject(mockQueryString);

            expect(obj).toEqual(mockQueryObject);
        });
    });

    describe('Utils transfrom object to query test', () => {
        it('must transform object to correct query string', () => {
            const actual = transformObjectToQuery(mockQueryObject);

            expect(actual).toEqual(mockQueryString);
        });

        it('provide empty string to function', () => {
            const actual = transformObjectToQuery('');

            expect(actual).toBe('');
        });
    });
});
