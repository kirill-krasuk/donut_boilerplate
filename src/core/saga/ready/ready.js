// @flow

import { put, call }             from 'redux-saga/effects';
import type { Saga }             from 'redux-saga';

import type { iSocketConnector } from 'core/interfaces/SocketConnector';
import { socketInitAction }      from 'core/actions/socket';
import { SocketConnector }       from 'core/services';

export function* ready(): Saga<void> {
    const socketConnector: iSocketConnector  = new SocketConnector();

    const socket = yield call(socketConnector.connect);

    yield put(socketInitAction(socket));
}
