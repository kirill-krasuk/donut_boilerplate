import { take, call }          from 'redux-saga/effects';
import { SagaIterator }        from 'redux-saga';

import { createSocketChannel } from '../createSocketChannel';

export function* orderFill(socket: Record<string, any>): SagaIterator {
    const channel = yield call(createSocketChannel, socket, 'order_fill');

    while (true) {
        const payload = yield take(channel);

        window.console.log('order fill', payload);
    }
}
