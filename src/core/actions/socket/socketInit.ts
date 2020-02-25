import { createAction } from 'typesafe-actions';

import { SocketInit }   from '@core/types/socket';

export const SOCKET_INIT: SocketInit['type'] = 'core/SOCKET_INIT';
export const socketInitAction = createAction(SOCKET_INIT)<SocketInit['payload']>();
