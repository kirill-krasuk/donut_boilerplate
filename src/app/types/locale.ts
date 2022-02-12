import { Locale } from '@app/enums/locale';

export type ChangeLocale = {
    type: 'core/CHANGE_LOCALE';
    payload: Locale;
}

export type LocaleState = Locale;
