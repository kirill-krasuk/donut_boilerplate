import { createAction }        from 'typesafe-actions';

import { SetModalHistoryFlag } from '@core/types/modal';

export const SET_MODAL_HISTORY_FLAG: SetModalHistoryFlag['type'] = 'core/SET_MODAL_HISTORY_FLAG';
export const setModalHistoryFlagAction = createAction(SET_MODAL_HISTORY_FLAG)<SetModalHistoryFlag['payload']>();
