import { Iterable }        from '@core/interfaces/Iterable';
import { IteratorCreator } from '@core/interfaces/IteratorCreator';

export interface Headers extends Iterable {
    _innerObject: Record<string, any>;

    _iteratorCreator: IteratorCreator;

    set(key: string, value: unknown): Headers;
    get(key: string): Record<string, any>;
    has(key: string): boolean;
    delete(key: string): Headers;

    toObject(): Record<string, any>;
}
