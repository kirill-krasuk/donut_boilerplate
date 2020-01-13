// @flow

import { createAction }         from 'redux-actions';

import type { ActionType }      from 'core/types/action';
import type { ChangeThemeType } from 'core/types/theme';

export const CHANGE_THEME: $PropertyType<ChangeThemeType, 'type'> = 'core/CHANGE_THEME';
export const changeThemeAction: ActionType<
        $PropertyType<ChangeThemeType, 'type'>,
        $PropertyType<ChangeThemeType, 'payload'>
    > = createAction(CHANGE_THEME);
