// @flow
import { createAction }              from 'redux-actions';

import type { ActionType }           from 'core/types/action';
import type { IsFirstRenderingType } from 'core/types/location';

export const IS_FIRST_RENDERING: $PropertyType<IsFirstRenderingType, 'type'> = 'core/IS_FIRST_RENDERING';
export const isFirstRenderingAction: ActionType<
        $PropertyType<IsFirstRenderingType, 'type'>,
        $PropertyType<IsFirstRenderingType, 'payload'>
    > = createAction(IS_FIRST_RENDERING);
