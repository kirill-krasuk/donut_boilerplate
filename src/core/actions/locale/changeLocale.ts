import { createAction } from 'redux-actions';

import { ChangeLocale } from '@core/types/locale';

export const CHANGE_LOCALE: ChangeLocale['type'] = 'core/CHANGE_LOCALE';
export const changeLocaleAction = createAction<ChangeLocale['payload']>(CHANGE_LOCALE);
