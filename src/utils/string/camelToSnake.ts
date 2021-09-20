export const camelToSnake = (str: string) => str
    .replace(/([A-Z])/g, (_match, s1) => `_${ s1.toLowerCase() }`)
    .replace(/([0-9])/g, '_$1')
    .replace(/^(_)([a-z])/, '$2');
