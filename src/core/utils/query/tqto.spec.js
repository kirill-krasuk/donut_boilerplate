import { QueryParams }            from 'test/__mocks__/queryParams';
import { mockQueryString }        from 'test/__mocks__/queryString';
import { mockQueryObject }        from 'test/__mocks__/queryObject';
import { transformObjectToQuery } from './transformObjectToQuery';

describe('Utils transfrom object to query test', () => {
    it('Must transform object to correct query string', () => {
        const qpInstance = new QueryParams();

        transformObjectToQuery(mockQueryObject, qpInstance);

        expect(qpInstance.toString()).toEqual(mockQueryString);
    });
});
