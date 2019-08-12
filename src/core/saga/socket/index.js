// @flow
import { take, all, fork } from 'redux-saga/effects';
import type { Saga }       from 'redux-saga';

import * as actions        from 'core/actions/socket';
import * as handlers       from './handlers';

export function* startSocketConnection(): Saga<void> {
    while (true) {
        const { payload: socket } = yield take([ actions.SOCKET_INIT, actions.SOCKET_RECONNECT ]);

        yield all([
            fork(handlers.orderFill, socket),
            fork(handlers.quoteMarketData, socket)
        ]);
    }
}
