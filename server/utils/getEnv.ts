import dotenv from 'dotenv';
import R      from 'ramda';

const envs = {
    ...dotenv.config().parsed,
    NODE_ENV: process.env.NODE_ENV
};

export const getEnv = (prop: string, defaultValue: string | undefined): string | number | boolean => R.pathOr(defaultValue, [ prop ], envs);
