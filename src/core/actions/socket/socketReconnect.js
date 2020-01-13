// @flow

import { createAction }             from 'redux-actions';

import type { ActionType }          from 'core/types/action';
import type { SocketReconnectType } from 'core/types/socket';

export const SOCKET_RECONNECT: $PropertyType<SocketReconnectType, 'type'> = 'core/SOCKET_RECONNECT';
export const socketReconnectAction: ActionType<
        $PropertyType<SocketReconnectType, 'type'>,
        $PropertyType<SocketReconnectType, 'payload'>
    > = createAction(SOCKET_RECONNECT);
