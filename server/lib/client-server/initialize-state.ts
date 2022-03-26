import { Store }               from '@reduxjs/toolkit';

import { localeModel, Locale } from '@entities/locale';
import { themeModel, Theme }   from '@entities/theme';

export type InitState = {
    mode: Theme,
    locale: Locale
}

// TODO: move to app dir
export function initializeState(store: Store, { mode, locale }: InitState): void {
    store.dispatch(localeModel.actions.changeLocale(locale));
    store.dispatch(themeModel.actions.changeTheme(mode));
}
