import { mockQueryObject }        from 'test/__mocks__/queryObject';
import { mockQueryString }        from 'test/__mocks__/queryString';
import { QueryParams }            from 'test/__mocks__/queryParams';
import { transformQueryToObject } from './transformQueryToObject';

// TODO: need to fix helper
describe.skip('Utils transform query to object', () => {
    it('Must transform query to correct object', () => {
        const qpInstance = new QueryParams(mockQueryString);
        const obj        = transformQueryToObject(qpInstance);

        expect(obj).toEqual(mockQueryObject);
    });
});
