// @flow

import { createAction }    from 'redux-actions';

import type { ActionType } from 'core/types/action';
import type { FetchType }  from 'core/types/fetch';

export const FETCH: $PropertyType<FetchType, 'type'> = 'core/FETCH';
export const fetchAction: ActionType<
        $PropertyType<FetchType, 'type'>,
        $PropertyType<FetchType, 'payload'>
    > = createAction(FETCH);
