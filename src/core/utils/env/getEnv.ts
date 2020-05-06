import * as I        from 'fp-ts/lib/IO';
import * as E        from 'fp-ts/lib/Either';
import * as O        from 'fp-ts/lib/Option';
import * as C        from 'fp-ts/lib/Console';
import { pipe }      from 'fp-ts/lib/pipeable';

import { parseJSON } from '@core/utils/json';

const dropEmptyValue = (value: string | null) => (
    !value
        ? O.none
        : O.some(value)
);

const parseOtherValues = (valueOption: O.Option<string>) => pipe(
    valueOption,
    O.map(value => pipe(
        parseJSON(value),
        E.getOrElse(() => value),
    )),
);

export const getEnv = (getEnv: I.IO<NodeJS.ProcessEnv>) => <T = string>(key: string, defaultValue?: T) => pipe(
    E.fromNullable(new Error('Such a variable does not exist'))(getEnv()[key]),
    E.map(dropEmptyValue),
    (either) => pipe(
        either,
        E.fold(
            (reason) => (C.error(reason)(), O.none),
            (value) => parseOtherValues(value) as O.Option<T>
        ),
    ),
    O.fold(
        () => (defaultValue ? O.some(defaultValue) : O.none),
        (value) => O.some(value)
    )
);
