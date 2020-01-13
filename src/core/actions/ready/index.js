// @flow

import { createAction }    from 'redux-actions';

import type { ActionType } from 'core/types/action';
import type { ReadyType }  from 'core/types/ready';

export const READY: $PropertyType<ReadyType, 'type'> = 'core/READY';
export const readyAction: ActionType<
        $PropertyType<ReadyType, 'type'>,
        $PropertyType<ReadyType, 'payload'>
    > = createAction(READY);
