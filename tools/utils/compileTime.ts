/* eslint-disable no-console */
import chalk            from 'chalk';

import { MEDIUM, FAST } from '../constants/times';

export function compileTime(time: number) {
    if (time < FAST) {
        return chalk.green(time);
    }

    if (time < MEDIUM) {
        return chalk.yellow(time);
    }

    if (time > MEDIUM) {
        console.log(chalk`{black.bgYellow.bold  WARN } {yellow Time of compilation is too long.}`);
        return chalk.red(time);
    }
}
