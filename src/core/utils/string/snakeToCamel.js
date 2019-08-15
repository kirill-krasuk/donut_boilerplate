// @flow

export const snakeToCamel = (str: string, formatter?: 'upper' | 'lower' = 'lower') => str
    .replace(/([a-z])/, (match, s1) => (formatter === 'upper' ? s1.toUpperCase() : s1))
    .replace(/_([a-z])/g, (match, s1) => s1.toUpperCase())
    .replace(/_/g, '');
