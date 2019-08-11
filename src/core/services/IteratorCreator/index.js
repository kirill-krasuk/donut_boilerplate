// @flow
import { injectable }            from 'inversify';

import type { iIteratorCreator } from 'core/interfaces/IteratorCreator';

@injectable()
export class IteratorCreator implements iIteratorCreator {
    _iterableObject: Object;

    createFrom(object: *): iIteratorCreator {
        this._iterableObject = object;

        return this;
    }

    keys(): Iterator<*> {
        const keys = Object.keys(this._iterableObject);

        const iterator = this._makeSimpleIterator(keys);

        return iterator[Symbol.iterator]();
    }

    values(): Iterator<*> {
        const values = Object.values(this._iterableObject);

        const iterator = this._makeSimpleIterator(values);

        return iterator[Symbol.iterator]();
    }

    entries(): Iterator<*> {
        const entries = Object.entries(this._iterableObject);

        const iterator = this._makeSimpleIterator(entries);

        return iterator[Symbol.iterator]();
    }

    _makeSimpleIterator(iterableObject: Object): Object {
        return {
            [iterableObject]: iterableObject,
            * [Symbol.iterator]() {
                for (let i = 0; i < this[iterableObject].length; i++) {
                    yield this[iterableObject][i];
                }
            }
        };
    }

    _makeEntriesIterator(iterableObject: Object): Object {
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
