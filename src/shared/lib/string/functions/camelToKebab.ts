import R                from 'ramda';

import { camelToSnake } from './camelToSnake';
import { snakeToKebab } from './snakeToKebab';

const camelToKebab: (str: string) => string = R.compose(snakeToKebab, camelToSnake);

export { camelToKebab };
