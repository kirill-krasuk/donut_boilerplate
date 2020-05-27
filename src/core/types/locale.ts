import { Locale } from '@core/enums/locale';

export type ChangeLocale = {
    type: 'core/CHANGE_LOCALE';
    payload: Locale;
}

export type LocaleState = Locale;
