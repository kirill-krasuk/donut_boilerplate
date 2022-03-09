import { Locale }             from '@entities/locale';
import { createToggleHelper } from '@utils/toggler';

export const toggleLocale = createToggleHelper({
    [Locale.Ru]: Locale.En,
    [Locale.En]: Locale.Ru
});
