import * as E          from 'fp-ts/lib/Either';

import { interpolate } from '../string';

export const minLength = (min = 6) => (message?: string) => (s: string) => (
    s.length >= min
        ? E.right(s)
        : E.left(interpolate(message, [ min ], 'At least {{ $0 }} characters'))
);

export const oneCapital = (message?: string) => (s: string) => (
    /[A-ZЁА-Я]/g.test(s)
        ? E.right(s)
        : E.left(interpolate(message, [], 'At least one capital letter'))
);

export const oneNumber = (message?: string) => (s: string) => (
    /[0-9]/g.test(s)
        ? E.right(s)
        : E.left(interpolate(message, [], 'At least one number'))
);

export const isRequired = (message?: string) => (s: string) => (
    s
        ? E.right(s)
        : E.left(interpolate(message, [], 'Field is required'))
);

export const isChecked = (message?: string) => (c: boolean) => (
    c
        ? E.right(c)
        : E.left(interpolate(message, [], 'Must be a checked'))
);
