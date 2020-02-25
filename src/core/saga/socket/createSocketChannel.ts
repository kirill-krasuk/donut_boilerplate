import {
    eventChannel,
    END,
    EventChannel,
    Subscribe,
    Unsubscribe
} from 'redux-saga';

export function createSocketChannel(socket: Record<string, any>, event: string): EventChannel<any> {
    const subscribe: Subscribe<any> = (emitter: Function): Unsubscribe => {
        socket.on(event, emitter);

        socket.on('disconnect', () => {
            emitter(END);
        });

        return (): void => {
            socket.removeListener(event, emitter);
        };
    };

    return eventChannel(subscribe);
}
