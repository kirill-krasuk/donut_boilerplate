// @flow

import { createAction }          from 'redux-actions';

import type { ActionType }       from 'core/types/action';
import type { ChangeLocaleType } from 'core/types/locale';

export const CHANGE_LOCALE: $PropertyType<ChangeLocaleType, 'type'> = 'core/CHANGE_LOCALE';
export const changeLocaleAction: ActionType<
        $PropertyType<ChangeLocaleType, 'type'>,
        $PropertyType<ChangeLocaleType, 'payload'>
    > = createAction(CHANGE_LOCALE);
