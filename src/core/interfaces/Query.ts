// @flow

import { GenericObject }    from 'core/types/object';
import { iIterable }        from 'core/interfaces/Iterable';
import { iIteratorCreator } from './IteratorCreator';

export interface iQuery extends iIterable {
    _string: string;
    _qObject: GenericObject<any>;

    _iteratorCreator: iIteratorCreator;

    set(key: string, value: mixed): iQuery;
    get(key: string): any;
    has(key: string): boolean;
    delete(key: string): iQuery;

    toObject(): GenericObject<any>;
    toString(): string;

    _transformQuery(initQuery: string): void;
}
