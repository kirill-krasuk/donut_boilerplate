import { localeModel, Locale } from '@entities/locale';
import { themeModel, Theme }   from '@entities/theme';

import type { Store }          from '@reduxjs/toolkit';

type InitState = {
	mode: Theme,
	locale: Locale
};

// TODO: move to app dir
function initializeState(store: Store, { mode, locale }: InitState): void {
	store.dispatch(localeModel.actions.changeLocale(locale));
	store.dispatch(themeModel.actions.changeTheme(mode));
}

export { initializeState };
export type { InitState };
