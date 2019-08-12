// @flow
import { take, call }          from 'redux-saga/effects';
import type { Saga }           from 'redux-saga';

import { createSocketChannel } from '../createSocketChannel';

export function* orderFill(socket: Object): Saga<void> {
    const channel = yield call(createSocketChannel, socket, 'order_fill');

    while (true) {
        const payload = yield take(channel);

        window.console.log('order fill', payload);
    }
}
