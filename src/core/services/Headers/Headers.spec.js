import { container } from 'core/services/inversify';
import { TYPES }     from '../types';

describe('Headers service', () => {
    let headers;

    beforeEach(() => {
        headers = container.get(TYPES.Headers);
    });

    describe('Headers methods', () => {
        describe('method set', () => {
            it('the method should set headers correctly', () => {
                let actual   = headers
                    .set('Content-Type', 'application/json')
                    .toObject();
                let expected = {
                    'content-type': 'application/json'
                };

                expect(actual).toEqual(expected);

                actual   = headers
                    .set('Accept', 'application/json')
                    .toObject();
                expected = {
                    ...expected,
                    accept: 'application/json'
                };

                expect(actual).toEqual(expected);
            });
        });

        describe('method get', () => {
            beforeEach(() => {
                headers
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json');
            });

            it('the method should return the value by key in any register', () => {
                let actual     = headers.get('Content-Type');
                const expected = 'application/json';

                expect(actual).toEqual(expected);

                actual = headers.get('accept');

                expect(actual).toEqual(expected);
            });
        });

        describe('method has', () => {
            beforeEach(() => {
                headers
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json');
            });

            it('method should return any boolean value', () => {
                const actual = headers.has('test');

                expect(actual).toEqual(expect.any(Boolean));
            });

            it('method should return true', () => {
                let actual = headers.has('content-type');

                expect(actual).toBeTruthy();

                actual = headers.has('Content-type');

                expect(actual).toBeTruthy();

                actual = headers.has('Content-Type');

                expect(actual).toBeTruthy();
            });

            it('method should return false', () => {
                const actual = headers.has('test');

                expect(actual).toBeFalsy();
            });
        });

        describe('method delete', () => {
            beforeEach(() => {
                headers
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json');
            });

            it('the method should return a false to verify the key in the object', () => {
                const deletedKey = 'Content-Type';

                const actual = Object
                    .prototype
                    .hasOwnProperty
                    .call(headers.delete(deletedKey).toObject(), deletedKey.toLowerCase());

                expect(actual).toBeFalsy();
            });

            it('value must be equeal to undefined after key deleted from object', () => {
                const deletedKey = 'Content-Type';

                headers.delete(deletedKey);

                const actual = headers.get(deletedKey);

                expect(actual).toBeUndefined();
            });
        });
    });

    describe('Service iterators', () => {
        beforeEach(() => {
            headers
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json');
        });

        it('Keys iterator', () => {
            const keys = [];

            for (const key of headers.keys()) {
                keys.push(key);
            }

            const actual   = keys;
            const expected = [
                'content-type',
                'accept'
            ];

            expect(actual).toEqual(expected);
        });

        it('Values iterator', () => {
            const values = [];

            for (const key of headers.values()) {
                values.push(key);
            }

            const actual   = values;
            const expected = [
                'application/json',
                'application/json'
            ];

            expect(actual).toEqual(expected);
        });

        it('Entires iterator', () => {
            const entries = [];

            for (const key of headers.entries()) {
                entries.push(key);
            }

            const actual   = entries;
            const expected = [
                [ 'content-type', 'application/json' ],
                [ 'accept', 'application/json' ]
            ];

            expect(actual).toEqual(expected);
        });
    });
});
