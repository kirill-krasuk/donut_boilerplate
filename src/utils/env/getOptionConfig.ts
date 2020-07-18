import * as C             from 'fp-ts/lib/Console';
import * as O             from 'fp-ts/lib/Option';
import { pipe }           from 'fp-ts/lib/pipeable';

import { Env, FoldedEnv } from '@core/types/env';

export const getOptionConfig = <C extends Env>(config: C) => <K extends keyof Env>(key: K): FoldedEnv[K] => pipe(
    config[key],
    O.fold<string | boolean, FoldedEnv[K]>(
        () => (C.warn('You are trying to get null as a value')(), null as any),
        (value) => value as FoldedEnv[K]
    )
);
