// @flow

import { put, call }             from 'redux-saga/effects';
import type { Saga }             from 'redux-saga';

import type { iSocketConnector } from 'core/interfaces/SocketConnector';
import { container }             from 'core/services/inversify';
import { TYPES }                 from 'core/services/types';
import { socketInitAction }      from 'core/actions/socket';

export function* ready(): Saga<void> {
    const socketConnector: iSocketConnector  = container.get(TYPES.SocketConnector);

    const socket = yield call(socketConnector.connect);

    yield put(socketInitAction(socket));
}
