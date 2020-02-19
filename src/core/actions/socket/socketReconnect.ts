import { createAction }        from 'redux-actions';

import { SocketReconnectType } from '@core/types/socket';

export const SOCKET_RECONNECT: SocketReconnectType['type'] = 'core/SOCKET_RECONNECT';
export const socketReconnectAction = createAction<SocketReconnectType['payload']>(SOCKET_RECONNECT);
