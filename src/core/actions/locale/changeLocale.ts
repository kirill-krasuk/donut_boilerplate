import { createAction }     from 'redux-actions';

import { ChangeLocaleType } from '@core/types/locale';

export const CHANGE_LOCALE: ChangeLocaleType['type'] = 'core/CHANGE_LOCALE';
export const changeLocaleAction = createAction<ChangeLocaleType['payload']>(CHANGE_LOCALE);
