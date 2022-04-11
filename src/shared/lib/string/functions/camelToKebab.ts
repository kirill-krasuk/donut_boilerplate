import R                from 'ramda';

import { snakeToKebab } from './snakeToKebab';
import { camelToSnake } from './camelToSnake';

export const camelToKebab: (str: string) => string = R.compose(
    snakeToKebab,
    camelToSnake,
);
