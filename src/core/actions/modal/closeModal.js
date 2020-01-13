// @flow

import { createAction }        from 'redux-actions';

import type { ActionType }     from 'core/types/action';
import type { CloseModalType } from 'core/types/modal';

export const CLOSE_MODAL: $PropertyType<CloseModalType, 'type'> = 'core/CLOSE_MODAL';
export const closeModalAction: ActionType<
        $PropertyType<CloseModalType, 'type'>,
        $PropertyType<CloseModalType, 'payload'>
    > = createAction(CLOSE_MODAL);
