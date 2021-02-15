import R from 'ramda';

export const getEnv = <T>(prop: string, defaultValue: T): T => R.pathOr(defaultValue, [ prop ], process.env);
