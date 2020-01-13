// @flow

import type { iIterable }        from 'core/interfaces/Iterable';
import type { iIteratorCreator } from 'core/interfaces/IteratorCreator';
import type { GenericObject }    from 'core/types/object';

export interface iHeaders extends iIterable {
    _innerObject: GenericObject<*>;

    _iteratorCreator: iIteratorCreator;

    set(key: string, value: *): iHeaders;
    get(key: string): GenericObject<*>;
    has(key: string): boolean;
    delete(key: string): iHeaders;

    toObject(): GenericObject<*>;
}
