import { createAction } from 'redux-actions';

import { SetModal }     from '@core/types/modal';

export const SET_MODAL: SetModal['type'] = 'core/SET_MODAL';
export const setModalAction = createAction<SetModal['payload']>(SET_MODAL);
