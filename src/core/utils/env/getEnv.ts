import * as IO       from 'fp-ts/lib/IO';
import * as E        from 'fp-ts/lib/Either';
import * as O        from 'fp-ts/lib/Option';
import * as C        from 'fp-ts/lib/Console';
import { pipe }      from 'fp-ts/lib/pipeable';
import { flow }      from 'fp-ts/lib/function';

import { parseJSON } from '@utils/json';

const dropEmptyValue = O.fromPredicate<string>(Boolean);

const parseOtherValues = flow(
    O.map(value => pipe(
        parseJSON(value as string),
        E.getOrElse(() => value),
    )),
);

export const getEnv = (getEnv: IO.IO<NodeJS.ProcessEnv>) => <T = string>(key: string, defaultValue?: T) => pipe(
    E.fromNullable(new Error(`Such a variable ${ key } does not exist`))(getEnv()[key]),
    E.map(dropEmptyValue),
    (either) => pipe(
        either,
        E.fold(
            (reason) => (C.error(reason)(), O.none),
            (value) => parseOtherValues(value) as O.Option<T>
        ),
    ),
    O.fold(
        () => O.fromPredicate<T | undefined>(Boolean)(defaultValue) as O.Option<T>,
        (value) => O.some(value)
    )
);
