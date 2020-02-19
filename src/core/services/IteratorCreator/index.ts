// @flow

import { iIteratorCreator } from 'core/interfaces/IteratorCreator';

export class IteratorCreator implements iIteratorCreator {
    _iterableObject: Record<string, any>;

    createFrom(object: any): iIteratorCreator {
        this._iterableObject = object;

        return this;
    }

    keys(): Iterator<any> {
        const keys = Object.keys(this._iterableObject);

        const iterator = this._makeSimpleIterator(keys);

        return iterator[Symbol.iterator]();
    }

    values(): Iterator<any> {
        const values = Object.values(this._iterableObject);

        const iterator = this._makeSimpleIterator(values);

        return iterator[Symbol.iterator]();
    }

    entries(): Iterator<any> {
        const entries = Object.entries(this._iterableObject);

        const iterator = this._makeSimpleIterator(entries);

        return iterator[Symbol.iterator]();
    }

    _makeSimpleIterator(iterableObject: Record<string, any>): Record<string, any> {
        return {
            [iterableObject]: iterableObject,
            * [Symbol.iterator]() {
                for (let i = 0; i < this[iterableObject].length; i++) {
                    yield this[iterableObject][i];
                }
            }
        };
    }

    _makeEntriesIterator(iterableObject: Record<string, any>): Record<string, any> {
        return {
            [iterableObject]: iterableObject,
            * [Symbol.iterator]() {
                for (let i = 0; i < this[iterableObject].length; i++) {
                    const [ key, value ] = this[iterableObject][i];

                    yield [ key, value ];
                }
            }
        };
    }
}