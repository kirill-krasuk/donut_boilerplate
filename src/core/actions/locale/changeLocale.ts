import { createAction } from 'typesafe-actions';

import { ChangeLocale } from '@core/types/locale';

export const CHANGE_LOCALE: ChangeLocale['type'] = 'core/CHANGE_LOCALE';
export const changeLocaleAction = createAction(CHANGE_LOCALE)<ChangeLocale['payload']>();
