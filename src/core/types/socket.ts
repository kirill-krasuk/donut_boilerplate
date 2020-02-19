export type SocketInitType = {
    type: 'core/SOCKET_INIT';
    payload: Record<string, any>;
};

export type SocketReconnectType = {
    type: 'core/SOCKET_RECONNECT';
    payload: Record<string, any>;
}
