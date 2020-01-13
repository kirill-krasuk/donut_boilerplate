// @flow

import { createAction }                 from 'redux-actions';

import type { SetModalHistoryFlagType } from 'core/types/modal';

type Type = $PropertyType<SetModalHistoryFlagType, 'type'>;
type Payload = $PropertyType<SetModalHistoryFlagType, 'payload'>;

export const SET_MODAL_HISTORY_FLAG: Type = 'core/SET_MODAL_HISTORY_FLAG';
export const setModalHistoryFlagAction = createAction<Type, Payload>(SET_MODAL_HISTORY_FLAG);
