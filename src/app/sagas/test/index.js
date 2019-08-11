// @flow
import { takeEvery }     from 'redux-saga/effects';
import type { Saga }     from 'redux-saga';

import { READY }         from 'core/actions/ready';
import { fetchForTest }  from './fetchForTest';

export default function* (): Saga<void> {
    yield takeEvery(READY, fetchForTest);
}
