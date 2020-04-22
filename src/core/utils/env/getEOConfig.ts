import * as E             from 'fp-ts/lib/Either';
import * as C             from 'fp-ts/lib/Console';
import * as O             from 'fp-ts/lib/Option';
import { pipe }           from 'fp-ts/lib/pipeable';
import { FoldedEnv, Env } from '@core/types/env';

const logError = (reason: Error): O.Option<never> => {
    C.error(reason)();
    return O.none;
};

export const getEOConfig = (config: Env) => <K extends keyof Env>(key: K): FoldedEnv[K] => pipe(

    // TODO: resolve types
    // @ts-ignore
    config[key],
    E.getOrElse(logError),
    O.toNullable
);
