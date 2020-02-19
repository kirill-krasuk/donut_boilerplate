import { createAction }   from 'redux-actions';

import { CloseModalType } from '@core/types/modal';

export const CLOSE_MODAL: CloseModalType['type'] = 'core/CLOSE_MODAL';
export const closeModalAction = createAction<CloseModalType['payload']>(CLOSE_MODAL);
