import { put, call }        from 'redux-saga/effects';
import { SagaIterator }     from 'redux-saga';

import { socketInitAction } from '@core/actions/socket';
import { SocketConnector }  from '@core/services';

export function* ready(): SagaIterator {
    const socketConnector = new SocketConnector();

    const socket = yield call(socketConnector.connect);

    yield put(socketInitAction(socket));
}
