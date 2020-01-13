// @flow

import { takeEvery }       from 'redux-saga/effects';
import type { Saga }       from 'redux-saga';
import { LOCATION_CHANGE } from 'connected-react-router';

import { locationObserve } from './locationObserve';

export default function* (): Saga<void> {
    yield takeEvery(LOCATION_CHANGE, locationObserve);
}
