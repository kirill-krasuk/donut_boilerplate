import dotenv from 'dotenv';
import * as R from 'ramda';

const envs = {
    ...dotenv.config().parsed,
    NODE_ENV: process.env.NODE_ENV
};

export const getEnv = (prop: string, defaultValue: string): string | number | boolean => JSON.parse(
    R.pathOr(defaultValue, [ prop ], envs)
);
