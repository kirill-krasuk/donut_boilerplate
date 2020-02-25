import { takeEvery }       from 'redux-saga/effects';
import { SagaIterator }    from 'redux-saga';
import { LOCATION_CHANGE } from 'connected-react-router';

import { locationObserve } from './locationObserve';

export default function* (): SagaIterator {
    yield takeEvery(LOCATION_CHANGE, locationObserve);
}
