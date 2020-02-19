import { createAction }            from 'redux-actions';

import { SetModalHistoryFlagType } from '@core/types/modal';

export const SET_MODAL_HISTORY_FLAG: SetModalHistoryFlagType['type'] = 'core/SET_MODAL_HISTORY_FLAG';
export const setModalHistoryFlagAction = createAction<SetModalHistoryFlagType['payload']>(SET_MODAL_HISTORY_FLAG);
