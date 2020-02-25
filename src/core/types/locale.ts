import { ELocale } from '@core/enums/locale';

export type ChangeLocale = {
    type: 'core/CHANGE_LOCALE';
    payload: ELocale;
}

export type LocaleState = ELocale;
