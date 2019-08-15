// @flow

export const camelToSnake = (str: string): string => str
    .replace(/([A-Z])/g, (match, s1) => `_${ s1.toLowerCase() }`)
    .replace(/([0-9])/g, '_$1')
    .replace('_', '');
