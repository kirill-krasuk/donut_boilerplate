import { createAction } from 'typesafe-actions';

import { CloseModal }   from '@core/types/modal';

export const CLOSE_MODAL: CloseModal['type'] = 'core/CLOSE_MODAL';
export const closeModalAction = createAction(CLOSE_MODAL)<CloseModal['payload']>();
