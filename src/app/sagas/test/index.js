// @flow
import { takeEvery }     from 'redux-saga/effects';
import type { Saga }     from 'redux-saga';

import { fetchForTest }  from './fetchForTest';

export default function* (): Saga<void> {
    yield takeEvery('core/READY', fetchForTest);
}
