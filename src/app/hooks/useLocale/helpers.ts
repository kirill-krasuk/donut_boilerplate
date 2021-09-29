import { Locale }             from '@core/enums/locale';
import { createToggleHelper } from '@utils/toggler';

export const toggleLocale = createToggleHelper({
    [Locale.Ru]: Locale.En,
    [Locale.En]: Locale.Ru
});