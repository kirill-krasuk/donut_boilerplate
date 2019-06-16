// @flow
import { takeEvery } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';

// eslint-disable-next-line
function* ready(): Saga<void> {
    console.log('hello saga');
}

export default function* (): Saga<void> {
    yield takeEvery('core/READY', ready);
}
