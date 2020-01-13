// @flow

import { createAction }             from 'redux-actions';

import type { SocketReconnectType } from 'core/types/socket';

type Type = $PropertyType<SocketReconnectType, 'type'>;
type Payload = $PropertyType<SocketReconnectType, 'type'>;

export const SOCKET_RECONNECT: Type = 'core/SOCKET_RECONNECT';
export const socketReconnectAction = createAction<Type, Payload>(SOCKET_RECONNECT);
