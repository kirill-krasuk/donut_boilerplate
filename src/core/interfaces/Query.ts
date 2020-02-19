import { Iterable }        from '@core/interfaces/Iterable';
import { IteratorCreator } from '@core/interfaces/IteratorCreator';

export interface Query extends Iterable {
    _string: string;
    _qObject: Record<string, any>;

    _iteratorCreator: IteratorCreator;

    set(key: string, value: any): Query;
    get(key: string): any;
    has(key: string): boolean;
    delete(key: string): Query;

    toObject(): Record<string, any>;
    toString(): string;

    _transformQuery(initQuery: string): void;
}
