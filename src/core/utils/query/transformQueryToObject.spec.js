import { mockQueryString }        from 'test/__mocks__/queryString';
import { mockQueryObject }        from 'test/__mocks__/queryObject';
import { transformObjectToQuery } from './transformObjectToQuery';

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
