import { take, all, fork } from 'redux-saga/effects';
import { SagaIterator }    from 'redux-saga';

import * as actions        from '@core/actions/socket';
import * as handlers       from './handlers';

export function* startSocketConnection(): SagaIterator {
    while (true) {
        const { payload: socket } = yield take([ actions.SOCKET_INIT, actions.SOCKET_RECONNECT ]);

        yield all([
            fork(handlers.orderFill, socket),
            fork(handlers.quoteMarketData, socket)
        ]);
    }
}
