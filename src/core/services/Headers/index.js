// @flow

import { injectable, inject }    from 'inversify';

import type { iHeaders }         from 'core/interfaces/Headers';
import type { iIteratorCreator } from 'core/interfaces/IteratorCreator';
import type { GenericObject }    from 'core/types/object';
import { TYPES }                 from '../types';

@injectable()
export class Headers implements iHeaders {
    _innerObject: GenericObject<*> = {};

    @inject(TYPES.IteratorCreator) _iteratorCreator: iIteratorCreator;


    set(key: string, value: *): iHeaders {
        this._innerObject[key.toLowerCase()] = value;

        return this;
    }

    get(key: string): GenericObject<*> {
        return this._innerObject[key.toLowerCase()];
    }

    has(key: string): boolean {
        return !!this._innerObject[key.toLowerCase()];
    }

    delete(key: string): iHeaders {
        delete this._innerObject[key.toLowerCase()];

        return this;
    }

    toObject(): GenericObject<*> {
        return this._innerObject;
    }

    keys(): Iterator<*> {
        const iterator = this._iteratorCreator
            .createFrom(this._innerObject)
            .keys();

        return iterator;
    }

    values(): Iterator<*> {
        const iterator = this._iteratorCreator
            .createFrom(this._innerObject)
            .values();

        return iterator;
    }

    entries(): Iterator<*> {
        const iterator = this._iteratorCreator
            .createFrom(this._innerObject)
            .entries();

        return iterator;
    }
}
