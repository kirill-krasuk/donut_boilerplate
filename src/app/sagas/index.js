// @flow
import { fork } from 'redux-saga/effects';

import test     from './test';

export const appSaga: Array<Function> = [
    fork(test),
];
