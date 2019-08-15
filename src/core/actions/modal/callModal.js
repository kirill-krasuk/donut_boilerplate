// @flow
import { createAction }       from 'redux-actions';

import type { ActionType }    from 'core/types/action';
import type { CallModalType } from 'core/types/modal';

export const CALL_MODAL: $PropertyType<CallModalType, 'type'> = 'core/CALL_MODAL';
export const callModalAction: ActionType<
        $PropertyType<CallModalType, 'type'>,
        $PropertyType<CallModalType, 'payload'>
    > = createAction(CALL_MODAL);
