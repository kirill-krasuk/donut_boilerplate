import * as IO from 'fp-ts/lib/IO';

export const getRandomRange = (min: number, max: number): IO.IO<number> => () => Math.floor(Math.random() * (max - min) + min);
