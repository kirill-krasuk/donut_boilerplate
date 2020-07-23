import * as E from 'fp-ts/lib/Either';

export const parseJSON = <T = string>(str: string) => E.tryCatch<Error, T>(
    () => JSON.parse(str),
    (reason) => new Error(String(reason))
);
