import { createToggleHelper } from '@utils/toggler';

import { Locale }             from '../types/enums';

export const toggleLocale = createToggleHelper({
	[Locale.Ru]: Locale.En,
	[Locale.En]: Locale.Ru
});
