import { Locale }             from '@core/enums/locale';
import { createToggleHelper } from '@core/utils/toggler';

export const toggleLocale = createToggleHelper({
    [Locale.Ru]: Locale.En,
    [Locale.En]: Locale.Ru
});
