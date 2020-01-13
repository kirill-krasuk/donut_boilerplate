// @flow

import type { GenericObject }    from 'core/types/object';
import type { iIterable }        from 'core/interfaces/Iterable';
import type { iIteratorCreator } from './IteratorCreator';

export interface iQuery extends iIterable {
    _string: string;
    _qObject: GenericObject<*>;

    _iteratorCreator: iIteratorCreator;

    set(key: string, value: mixed): iQuery;
    get(key: string): *;
    has(key: string): boolean;
    delete(key: string): iQuery;

    toObject(): GenericObject<*>;
    toString(): string;

    _transformQuery(initQuery: string): void;
}
