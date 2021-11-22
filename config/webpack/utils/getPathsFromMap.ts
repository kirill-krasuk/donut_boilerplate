import path from 'path';

export const getPathsFromMap = <T extends Record<string, string>>(pathMap: T): T => Object
    .entries(pathMap)
    .reduce((acc, [ key, value ]) => ({
        ...acc,
        [key]: path.resolve(value)
    }), {}) as T;
