// @flow

import { createAction }        from 'redux-actions';

import type { ActionType }     from 'core/types/action';
import type { SocketInitType } from 'core/types/socket';

export const SOCKET_INIT: $PropertyType<SocketInitType, 'type'> = 'core/SOCKET_INIT';
export const socketInitAction: ActionType<
        $PropertyType<SocketInitType, 'type'>,
        $PropertyType<SocketInitType, 'payload'>
    > = createAction(SOCKET_INIT);
