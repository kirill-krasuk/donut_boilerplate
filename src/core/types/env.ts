import * as O from 'fp-ts/lib/Option';

export type Env = {
    apiHost: O.Option<string>;
    swEnable: O.Option<boolean>;
    needHydrate: O.Option<boolean>;
}

export type FoldedEnv = {
    apiHost: string;
    swEnable: boolean;
    needHydrate: boolean;
}
