import { createAction }    from 'redux-actions';

import { SocketReconnect } from '@core/types/socket';

export const SOCKET_RECONNECT: SocketReconnect['type'] = 'core/SOCKET_RECONNECT';
export const socketReconnectAction = createAction<SocketReconnect['payload']>(SOCKET_RECONNECT);
