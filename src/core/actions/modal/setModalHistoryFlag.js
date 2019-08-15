// @flow
import { createAction }                 from 'redux-actions';

import type { ActionType }              from 'core/types/action';
import type { SetModalHistoryFlagType } from 'core/types/modal';

export const SET_MODAL_HISTORY_FLAG: $PropertyType<SetModalHistoryFlagType, 'type'> = 'core/SET_MODAL_HISTORY_FLAG';
export const setModalHistoryFlagAction: ActionType<
        $PropertyType<SetModalHistoryFlagType, 'type'>,
        $PropertyType<SetModalHistoryFlagType, 'payload'>
    > = createAction(SET_MODAL_HISTORY_FLAG);
