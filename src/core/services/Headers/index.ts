import { Headers as IHeaders } from '@core/interfaces/Headers';
import { GenericObject }       from '@core/types/object';
import { CreatedIterator }     from '@core/types/iterator';
import { IteratorCreator }     from '../IteratorCreator';

export class Headers implements IHeaders {
    _innerObject: Record<string, any> = {};
    _iteratorCreator: IteratorCreator = new IteratorCreator();

    set(key: string, value: any): IHeaders {
        this._innerObject[key.toLowerCase()] = value;

        return this;
    }

    get(key: string): GenericObject<any> {
        return this._innerObject[key.toLowerCase()];
    }

    has(key: string): boolean {
        return !!this._innerObject[key.toLowerCase()];
    }

    delete(key: string): IHeaders {
        delete this._innerObject[key.toLowerCase()];

        return this;
    }

    toObject(): GenericObject<any> {
        return this._innerObject;
    }

    keys(): Iterator<CreatedIterator> {
        const iterator = this._iteratorCreator
            .createFrom(this._innerObject)
            .keys();

        return iterator;
    }

    values(): Iterator<CreatedIterator> {
        const iterator = this._iteratorCreator
            .createFrom(this._innerObject)
            .values();

        return iterator;
    }

    entries(): Iterator<CreatedIterator> {
        const iterator = this._iteratorCreator
            .createFrom(this._innerObject)
            .entries();

        return iterator;
    }
}
