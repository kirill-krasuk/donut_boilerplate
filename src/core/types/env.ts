import * as E from 'fp-ts/lib/Either';
import * as O from 'fp-ts/lib/Option';

export type Env = {
    apiHost: E.Either<Error, O.Option<string>>;
    swEnable: E.Either<Error, O.Option<boolean>>;
    needHydrate: E.Either<Error, O.Option<boolean>>;
}

export type FoldedEnv = {
    apiHost: string;
    swEnable: boolean;
    needHydrate: boolean;
}
