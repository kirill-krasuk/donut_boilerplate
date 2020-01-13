// @flow

import { createAction }       from 'redux-actions';

import type { SetModalType }  from 'core/types/modal';

type Type = $PropertyType<SetModalType, 'type'>;
type Payload = $PropertyType<SetModalType, 'payload'>;

export const SET_MODAL: Type = 'core/SET_MODAL';
export const setModalAction = createAction<Type, Payload>(SET_MODAL);
