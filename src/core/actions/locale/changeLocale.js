// @flow

import { createAction }          from 'redux-actions';

import type { ChangeLocaleType } from 'core/types/locale';

type Type = $PropertyType<ChangeLocaleType, 'type'>;
type Payload = $PropertyType<ChangeLocaleType, 'payload'>;

export const CHANGE_LOCALE: Type = 'core/CHANGE_LOCALE';
export const changeLocaleAction = createAction<Type, Payload>(CHANGE_LOCALE);
