// @flow

import { eventChannel, END }   from 'redux-saga';
import { EventChannel }   from 'redux-saga';

export function createSocketChannel(socket: Object, event: string): EventChannel<any> {
    const subscribe = (emitter) => {
        socket.on(event, emitter);

        socket.on('disconnect', () => {
            emitter(END);
        });

        return () => {
            socket.removeListener(event, emitter);
        };
    };

    return eventChannel<any>(subscribe);
}
