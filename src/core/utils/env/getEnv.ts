import * as I        from 'fp-ts/lib/IO';
import * as E        from 'fp-ts/lib/Either';
import * as O        from 'fp-ts/lib/Option';
import { pipe }      from 'fp-ts/lib/pipeable';
import { parseJSON } from '@core/utils/json';

type EnvVariable<T> = E.Either<Error, O.Option<T extends infer U ? U : string>>;

const dropEmptyValue = (value: string | null) => (
    !value
        ? O.none
        : O.some(value)
);

const parseOtherValues = <T>(value: string, defaultV: T) => pipe(
    parseJSON<T>(value),
    E.getOrElse(() => defaultV),
    O.some
);

// TODO: resolve types
// @ts-ignore
export const getEnv = (getEnv: I.IO<NodeJS.ProcessEnv>) => <T = string>(key: string, defaultValue?: string): EnvVariable<T> => pipe(
    E.fromNullable(new Error('Such a variable does not exist'))(getEnv()[key]),
    E.map(dropEmptyValue),
    E.map(value => pipe(
        value,
        O.fold<string, O.Option<string>>(
            () => (
                defaultValue
                    ? O.some(defaultValue)
                    : O.none
            ),

            // @ts-ignore
            (value) => parseOtherValues<T>(value, value)
        )
    )),
);
