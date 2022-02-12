import { Locale } from '@app/enums/locale';
import { Theme }  from '@app/enums/theme';

export type InitState = {
    mode: Theme;
    locale: Locale;
}
