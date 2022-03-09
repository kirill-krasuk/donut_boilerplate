import { Locale } from './enums';

export type ChangeLocale = {
    type: 'core/CHANGE_LOCALE',
    payload: Locale
}

export type LocaleState = Locale;
