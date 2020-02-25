import dotenv from 'dotenv';
import R      from 'ramda';

const envs = {
    ...dotenv.config().parsed,
    NODE_ENV: process.env.NODE_ENV
};

export const getEnv = <T>(prop: string, defaultValue: T): T => R.pathOr(defaultValue, [ prop ], envs);
