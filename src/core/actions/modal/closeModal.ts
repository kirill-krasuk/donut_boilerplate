import { createAction } from 'redux-actions';

import { CloseModal }   from '@core/types/modal';

export const CLOSE_MODAL: CloseModal['type'] = 'core/CLOSE_MODAL';
export const closeModalAction = createAction<CloseModal['payload']>(CLOSE_MODAL);
