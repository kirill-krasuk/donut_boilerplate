// @flow
import { fork, put } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';

import ready         from './ready';

export default function* (): Saga<void> {
    yield fork(ready);

    yield put({ type: 'core/READY' });
}
