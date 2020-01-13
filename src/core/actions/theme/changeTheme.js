// @flow

import { createAction }         from 'redux-actions';

import type { ChangeThemeType } from 'core/types/theme';

type Type = $PropertyType<ChangeThemeType, 'type'>;
type Payload = $PropertyType<ChangeThemeType, 'payload'>;

export const CHANGE_THEME: Type = 'core/CHANGE_THEME';
export const changeThemeAction = createAction<Type, Payload>(CHANGE_THEME);
