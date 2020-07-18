import { useState }         from 'react';
import * as E               from 'fp-ts/lib/Either';
import * as O               from 'fp-ts/lib/Option';
import * as C               from 'fp-ts/lib/Console';
import { pipe }             from 'fp-ts/lib/pipeable';

import { parseJSON }        from '@utils/json';
import { setItem, getItem } from '@utils/localStorage';

export function useLocalStorage<T>(key: string, initialValue: T): [T, <V>(value: V) => void] {
    const [ storedValue, setStoredValue ] = useState(() => pipe(
        getItem(key)(),
        O.map((value) => parseJSON<T>(value)),
        O.fold(
            () => initialValue,
            (either) => pipe(
                either,
                E.getOrElse(() => initialValue)
            )
        )
    ));

    const setValue = <V>(value: V) => E.tryCatch(
        () => pipe(
            value instanceof Function
                ? value(storedValue)
                : value,
            (value) => {
                setStoredValue(value);
                setItem(key, JSON.stringify(value))();
            }
        ),
        (err) => C.error(err)()
    );

    return [ storedValue, setValue ];
}
