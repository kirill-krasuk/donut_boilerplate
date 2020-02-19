import { takeEvery }    from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { READY }        from '@core/actions/ready';
import { ready }        from './ready';

export default function* (): SagaIterator {
    yield takeEvery(READY, ready);
}
