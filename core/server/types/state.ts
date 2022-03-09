import { Locale } from '@entities/locale';
import { Theme }  from '@entities/theme';

export type InitState = {
    mode: Theme,
    locale: Locale
}
