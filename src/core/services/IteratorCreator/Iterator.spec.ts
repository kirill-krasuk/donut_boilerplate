import { IteratorCreator } from '.';

describe('Iterator service', () => {
    let iterableOjbect,
        iterableArray,
        iteratorCreator;

    beforeEach(() => {
        iteratorCreator = new IteratorCreator();
    });

    beforeEach(() => {
        iterableOjbect = {
            one  : 1,
            two  : 2,
            three: 3
        };

        iterableArray = [ 'test', 1, true ];
    });

    it('should return array of keys for object and array', () => {
        const objKeys = [];
        const arrKeys = [];

        let iterator = iteratorCreator.createFrom(iterableOjbect);

        for (const key of iterator.keys()) {
            objKeys.push(key);
        }

        let actual   = objKeys;
        let expected = [ 'one', 'two', 'three' ];

        expect(actual).toEqual(expected);

        iterator = iteratorCreator.createFrom(iterableArray);

        for (const key of iterator.keys()) {
            arrKeys.push(key);
        }

        actual   = arrKeys;
        expected = [ '0', '1', '2' ];

        expect(actual).toEqual(expected);
    });

    it('should return array of values for object and array', () => {
        const objValues = [];
        const arrValues = [];

        let iterator = iteratorCreator.createFrom(iterableOjbect);

        for (const value of iterator.values()) {
            objValues.push(value);
        }

        let actual   = objValues;
        let expected = [ 1, 2, 3 ];

        expect(actual).toEqual(expected);

        iterator = iteratorCreator.createFrom(iterableArray);

        for (const value of iterator.values()) {
            arrValues.push(value);
        }

        actual   = arrValues;
        expected = [ 'test', 1, true ];

        expect(actual).toEqual(expected);
    });

    it('should return array of entries for object and array', () => {
        const objEntries = [];
        const arrEntires = [];

        let iterator = iteratorCreator.createFrom(iterableOjbect);

        for (const entrie of iterator.entries()) {
            objEntries.push(entrie);
        }

        let actual   = objEntries;
        let expected = [
            [ 'one', 1 ],
            [ 'two', 2 ],
            [ 'three', 3 ],
        ];

        expect(actual).toEqual(expected);

        iterator = iteratorCreator.createFrom(iterableArray);

        for (const entrie of iterator.entries()) {
            arrEntires.push(entrie);
        }

        actual   = arrEntires;
        expected = [
            [ '0', 'test' ],
            [ '1', 1 ],
            [ '2', true ],
        ];

        expect(actual).toEqual(expected);
    });
});
