import * as I from 'fp-ts/lib/IO';
import * as O from 'fp-ts/lib/Option';

export const getItem = (key: string): I.IO<O.Option<string>> => () => O.fromNullable(localStorage.getItem(key));
