import { localeModel } from '@entities/locale';
import { themeModel }  from '@entities/theme';

import type { Locale } from '@entities/locale';
import type { Theme }  from '@entities/theme';
import type { Store }  from '@reduxjs/toolkit';

type InitState = {
	mode: Theme,
	locale: Locale
};

// TODO: move to app dir
const initializeState = (store: Store, { mode, locale }: InitState): void => {
	store.dispatch(localeModel.actions.changeLocale(locale));
	store.dispatch(themeModel.actions.changeTheme(mode));
};

export { initializeState };
export type { InitState };
