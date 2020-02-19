import { Iterable } from '@core/interfaces/Iterable';

export interface IteratorCreator extends Iterable {
    createFrom(object: any): IteratorCreator;
}
