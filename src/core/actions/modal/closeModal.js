// @flow

import { createAction }        from 'redux-actions';

import type { CloseModalType } from 'core/types/modal';

type Type = $PropertyType<CloseModalType, 'type'>;
type Payload = $PropertyType<CloseModalType, 'payload'>;

export const CLOSE_MODAL: Type = 'core/CLOSE_MODAL';
export const closeModalAction = createAction<Type, Payload>(CLOSE_MODAL);
