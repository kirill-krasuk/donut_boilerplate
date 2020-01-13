// @flow

import type { iQuery }                                    from 'core/interfaces/Query';
import type { iIteratorCreator }                          from 'core/interfaces/IteratorCreator';
import type { GenericObject }                             from 'core/types/object';
import { transformQueryToObject, transformObjectToQuery } from 'core/utils/query';
import { IteratorCreator }                                from '../IteratorCreator';

export class Query implements iQuery {
    _string: string = '';
    _qObject: GenericObject<*> = {};

    _iteratorCreator: iIteratorCreator = new IteratorCreator();

    set(key: string, value: *): iQuery {
        this._qObject[key] = value;

        this._string = transformObjectToQuery(this._qObject);

        return this;
    }

    get(key: string): * {
        return this._qObject[key];
    }

    toObject(): GenericObject<*> {
        return this._qObject;
    }

    has(key: string): boolean {
        return !!this._qObject[key];
    }

    toString(): string {
        return this._string;
    }

    delete(key: string): iQuery {
        delete this._qObject[key];

        this._string = transformObjectToQuery(this._qObject);

        return this;
    }

    keys(): Iterator<*> {
        const iterator = this._iteratorCreator
            .createFrom(this._qObject)
            .keys();

        return iterator;
    }

    values(): Iterator<*> {
        const iterator = this._iteratorCreator
            .createFrom(this._qObject)
            .values();

        return iterator;
    }

    entries(): Iterator<*> {
        const iterator = this._iteratorCreator
            .createFrom(this._qObject)
            .entries();

        return iterator;
    }

    _transformQuery(query: string): void {
        if (query) {
            this._qObject = transformQueryToObject(query);
        }
    }
}
