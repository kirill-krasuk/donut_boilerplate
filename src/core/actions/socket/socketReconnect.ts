import { createAction }    from 'typesafe-actions';

import { SocketReconnect } from '@core/types/socket';

export const SOCKET_RECONNECT: SocketReconnect['type'] = 'core/SOCKET_RECONNECT';
export const socketReconnectAction = createAction(SOCKET_RECONNECT)<SocketReconnect['payload']>();
