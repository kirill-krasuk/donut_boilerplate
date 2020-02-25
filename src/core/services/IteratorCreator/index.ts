import { IteratorCreator as IIteratorCreator } from '@core/interfaces/IteratorCreator';
import { CreatedIterator }                     from '@core/types/iterator';

export class IteratorCreator implements IIteratorCreator {
    _iterableObject: Record<string, any> = {};

    createFrom(object: any): IIteratorCreator {
        this._iterableObject = object;

        return this;
    }

    keys(): Iterator<CreatedIterator> {
        const keys = Object.keys(this._iterableObject);

        const iterator = this._makeSimpleIterator(keys);

        return iterator[Symbol.iterator]();
    }

    values(): Iterator<CreatedIterator> {
        const values = Object.values(this._iterableObject);

        const iterator = this._makeSimpleIterator(values);

        return iterator[Symbol.iterator]();
    }

    entries(): Iterator<CreatedIterator> {
        const entries = Object.entries(this._iterableObject);

        const iterator = this._makeSimpleIterator(entries);

        return iterator[Symbol.iterator]();
    }

    _makeSimpleIterator(iterableObject: any[]): CreatedIterator {
        return {
            iterable: iterableObject,
            * [Symbol.iterator](): Generator {
                for (let i = 0; i < this.iterable.length; i++) {
                    yield this.iterable[i];
                }
            }
        };
    }

    _makeEntriesIterator(iterableObject: Record<string, any>): CreatedIterator {
        return {
            iterable: iterableObject,
            * [Symbol.iterator](): Generator {
                for (let i = 0; i < this.iterable.length; i++) {
                    const [ key, value ] = this.iterable[i];

                    yield [ key, value ];
                }
            }
        };
    }
}
