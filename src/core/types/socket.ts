export type SocketInit = {
    type: 'core/SOCKET_INIT';
    payload: Record<string, any>;
};

export type SocketReconnect = {
    type: 'core/SOCKET_RECONNECT';
    payload: Record<string, any>;
}
