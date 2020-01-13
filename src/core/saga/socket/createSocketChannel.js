// @flow

import { eventChannel, END }   from 'redux-saga';
import type { EventChannel }   from 'redux-saga';

export function createSocketChannel(socket: Object, event: string): EventChannel<*> {
    const subscribe = (emitter) => {
        socket.on(event, emitter);

        socket.on('disconnect', () => {
            emitter(END);
        });

        return () => {
            socket.removeListener(event, emitter);
        };
    };

    return eventChannel<*>(subscribe);
}
