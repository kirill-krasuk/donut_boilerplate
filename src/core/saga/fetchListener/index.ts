import { takeEvery }     from 'redux-saga/effects';
import { SagaIterator }  from 'redux-saga';

import * as actions      from '@core/actions/fetch';
import { fetchListener } from './fetchListener';

export default function* (): SagaIterator {
    yield takeEvery(actions.FETCH, fetchListener);
}
