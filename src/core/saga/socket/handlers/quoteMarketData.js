// @flow
import { take, call }          from 'redux-saga/effects';
import type { Saga }           from 'redux-saga';

import { createSocketChannel } from '../createSocketChannel';

export function* quoteMarketData(socket: Object): Saga<void> {
    const channel = yield call(createSocketChannel, socket, 'quote_market_data');

    while (true) {
        const payload = yield take(channel);

        window.console.log('quote_market_data', payload);
    }
}
