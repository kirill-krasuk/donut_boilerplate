import * as C             from 'fp-ts/lib/Console';
import * as O             from 'fp-ts/lib/Option';
import { pipe }           from 'fp-ts/lib/pipeable';

import { Env, FoldedEnv } from '@core/types/env';

export const getOptionConfig = <C extends Env>(config: C) => <K extends keyof FoldedEnv>(key: K): FoldedEnv[K] => pipe(

    // TODO: resolve type
    // @ts-ignore
    config[key],
    O.fold(
        () => (C.warn('You are trying to get null as a value')(), null),
        (value) => value
    )
);
