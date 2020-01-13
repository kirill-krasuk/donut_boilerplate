// @flow

import { createAction }       from 'redux-actions';

import type { ActionType }    from 'core/types/action';
import type { SetModalType }  from 'core/types/modal';

export const SET_MODAL: $PropertyType<SetModalType, 'type'> = 'core/SET_MODAL';
export const setModalAction: ActionType<
        $PropertyType<SetModalType, 'type'>,
        $PropertyType<SetModalType, 'payload'>
    > = createAction(SET_MODAL);
