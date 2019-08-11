// @flow
import type { iIterable } from 'core/interfaces/Iterable';

export interface iIteratorCreator extends iIterable {
    createFrom(object: *): iIteratorCreator;
}
