// @flow

import { createAction }       from 'redux-actions';

import type { CallModalType } from 'core/types/modal';

type Type = $PropertyType<CallModalType, 'type'>;
type Payload = $PropertyType<CallModalType, 'payload'>;

export const CALL_MODAL: Type = 'core/CALL_MODAL';
export const callModalAction = createAction<Type, Payload>(CALL_MODAL);
