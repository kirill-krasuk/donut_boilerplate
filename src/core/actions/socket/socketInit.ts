import { createAction }   from 'redux-actions';

import { SocketInitType } from '@core/types/socket';

export const SOCKET_INIT: SocketInitType['type'] = 'core/SOCKET_INIT';
export const socketInitAction = createAction<SocketInitType['payload']>(SOCKET_INIT);
