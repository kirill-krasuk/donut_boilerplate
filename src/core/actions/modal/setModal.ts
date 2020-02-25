import { createAction } from 'typesafe-actions';

import { SetModal }     from '@core/types/modal';

export const SET_MODAL: SetModal['type'] = 'core/SET_MODAL';
export const setModalAction = createAction(SET_MODAL)<SetModal['payload']>();
