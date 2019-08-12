// @flow

export type SocketInitType = {
    type: 'core/SOCKET_INIT',
    payload: Object
};

export type SocketReconnectType = {
    type: 'core/SOCKET_RECONNECT',
    payload: Object
}
