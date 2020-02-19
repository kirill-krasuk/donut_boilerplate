import { createAction }  from 'redux-actions';

import { SetModalType }  from '@core/types/modal';

export const SET_MODAL: SetModalType['type'] = 'core/SET_MODAL';
export const setModalAction = createAction<SetModalType['payload']>(SET_MODAL);
