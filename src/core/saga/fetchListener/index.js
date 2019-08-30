// @flow
import { takeEvery }     from 'redux-saga/effects';
import type { Saga }     from 'redux-saga';

import * as actions      from 'core/actions/fetch';
import { fetchListener } from './fetchListener';

export default function* (): Saga<void> {
    yield takeEvery(actions.FETCH, fetchListener);
}
