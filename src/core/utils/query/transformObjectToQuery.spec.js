import { mockQueryObject }        from 'test/__mocks__/queryObject';
import { mockQueryString }        from 'test/__mocks__/queryString';
import { transformQueryToObject } from './transformQueryToObject';

// TODO: need to fix helper
describe.skip('Utils transform query to object', () => {
    it('Must transform query to correct object', () => {
        const obj = transformQueryToObject(mockQueryString);

        expect(obj).toEqual(mockQueryObject);
    });
});
