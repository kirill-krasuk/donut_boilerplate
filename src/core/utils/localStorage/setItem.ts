import * as I from 'fp-ts/lib/IO';

export const setItem = (key: string, value: string): I.IO<void> => () => localStorage.setItem(key, value);
