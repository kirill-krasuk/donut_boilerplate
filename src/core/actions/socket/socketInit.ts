import { createAction } from 'redux-actions';

import { SocketInit }   from '@core/types/socket';

export const SOCKET_INIT: SocketInit['type'] = 'core/SOCKET_INIT';
export const socketInitAction = createAction<SocketInit['payload']>(SOCKET_INIT);
