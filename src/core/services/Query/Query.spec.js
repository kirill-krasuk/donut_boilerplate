import { container } from 'core/services/inversify';

import { Query }     from '.';
import { TYPES }     from '../types';

describe('Query service', () => {
    let query;

    beforeEach(() => {
        query = container.get(TYPES.Query);

        query.set('name', 'Kirill');
    });

    describe('Query methods', () => {
        describe('method set', () => {
            const queryPair = [ 'lastName', 'Krasuk' ];

            it('method must be return a ref to Query', () => {
                const actual   = query.set(...queryPair);
                const expected = Query;

                expect(actual).toEqual(expect.any(expected));
            });

            it('method must be set object correctly', () => {
                const actual   = query.set(...queryPair).toObject();
                const expected = {
                    name    : 'Kirill',
                    lastName: 'Krasuk'
                };

                expect(actual).toEqual(expected);
            });

            it('method must be ovveride values by key in Query', () => {
                query.set(...queryPair);
                query.set('name', 'Joe');

                let actual   = query.toObject();
                let expected = {
                    ...query.toObject(),
                    name: 'Joe',
                };

                expect(actual).toEqual(expected);

                actual   = query.toString();
                expected = 'name=Joe&lastName=Krasuk';

                expect(actual).toEqual(expected);
            });
        });

        describe('method toObject', () => {
            it('method must return correctly value with empty string argument', () => {
                const query = new Query('');

                query.set('name', 'Kirill');

                const actual   = query.toObject();
                const expected = {
                    name: 'Kirill'
                };

                expect(actual).toEqual(expected);
            });
        });

        describe('method get', () => {
            it('method must return correct value', () => {
                let actual     = query.get('name');
                const expected = 'Kirill';

                expect(actual).toEqual(expected);

                actual = query.get('age');

                expect(actual).toBeUndefined();
            });
        });

        describe('method has', () => {
            it('method must return true', () => {
                const actual = query.get('name');

                expect(actual).toBeTruthy();
            });

            it('method must return false', () => {
                const actual = query.get('noname');

                expect(actual).toBeFalsy();
            });
        });

        describe('method toString', () => {
            it('the method should correctly transform object with array as value', () => {
                query.set('arr', [ 1, 2, 3 ]);

                const actual   = query.toString();
                const expected = 'name=Kirill&arr[]=1&arr[]=2&arr[]=3';

                expect(actual).toEqual(expected);
            });
        });

        describe('method delete', () => {
            beforeEach(() => {
                query.set('lastName', 'Krasuk');
            });

            it('the method should return an object without a deleted key', () => {
                query.delete('name');

                const actual   = query.toObject();
                const expected = {
                    lastName: 'Krasuk'
                };

                expect(actual).toEqual(expected);
            });

            it('the method should return a string without a deleted key', () => {
                query
                    .set('age', 22)
                    .delete('lastName');

                const actual   = query.toString();
                const expected = 'name=Kirill&age=22';

                expect(actual).toEqual(expected);
            });
        });
    });

    describe('Service iterators', () => {
        beforeEach(() => {
            query
                .set('age', 22)
                .set('lastName', 'Krasuk');
        });

        it('Keys iterator', () => {
            const keys = [];

            // eslint-disable-next-line
            for (const key of query.keys()) {
                keys.push(key);
            }

            const actual   = keys;
            const expected = [ 'name', 'age', 'lastName' ];

            expect(actual).toEqual(expected);
        });

        it('Values iterator', () => {
            const values = [];

            // eslint-disable-next-line
            for (const value of query.values()) {
                values.push(value);
            }

            const actual   = values;
            const expected = [ 'Kirill', 22, 'Krasuk' ];

            expect(actual).toEqual(expected);
        });

        it('Entries iterator', () => {
            const entries = [];

            // eslint-disable-next-line
            for (const pair of query.entries()) {
                entries.push(pair);
            }

            const actual   = entries;
            const expected = [
                [ 'name', 'Kirill' ],
                [ 'age', 22 ],
                [ 'lastName', 'Krasuk' ]
            ];

            expect(actual).toEqual(expected);
        });
    });
});
