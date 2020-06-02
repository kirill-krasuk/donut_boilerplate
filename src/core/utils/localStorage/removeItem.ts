import * as I from 'fp-ts/lib/IO';

export const removeItem = (key: string): I.IO<void> => () => localStorage.removeItem(key);
