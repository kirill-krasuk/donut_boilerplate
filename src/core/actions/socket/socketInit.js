// @flow

import { createAction }        from 'redux-actions';

import type { SocketInitType } from 'core/types/socket';

type Type = $PropertyType<SocketInitType, 'type'>;
type Payload = $PropertyType<SocketInitType, 'payload'>;

export const SOCKET_INIT: Type = 'core/SOCKET_INIT';
export const socketInitAction = createAction<Type, Payload>(SOCKET_INIT);
