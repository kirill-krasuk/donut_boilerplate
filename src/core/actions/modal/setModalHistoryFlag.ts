import { createAction }        from 'redux-actions';

import { SetModalHistoryFlag } from '@core/types/modal';

export const SET_MODAL_HISTORY_FLAG: SetModalHistoryFlag['type'] = 'core/SET_MODAL_HISTORY_FLAG';
export const setModalHistoryFlagAction = createAction<SetModalHistoryFlag['payload']>(SET_MODAL_HISTORY_FLAG);
