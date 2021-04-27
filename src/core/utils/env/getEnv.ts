import * as IO  from 'fp-ts/lib/IO';
import * as E   from 'fp-ts/lib/Either';
import * as O   from 'fp-ts/lib/Option';
import * as C   from 'fp-ts/lib/Console';
import { pipe } from 'fp-ts/lib/pipeable';

const dropEmptyValue = O.fromPredicate((value) => value !== '');

export const getEnv = (getEnv: IO.IO<NodeJS.ProcessEnv>) => <T = string>(key: string, defaultValue?: T) => pipe(
    E.fromNullable(new Error(`Such a variable ${ key } does not exist`))(getEnv()[key]),
    E.map(dropEmptyValue),
    (either) => pipe(
        either,
        E.fold(
            (reason) => (C.error(reason)(), O.none),
            (value) => value as O.Option<T>
        ),
    ),
    O.fold(
        () => O.fromPredicate<T | undefined>(Boolean)(defaultValue) as O.Option<T>,
        (value) => O.some(value)
    ),
);
