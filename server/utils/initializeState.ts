import { Store }       from '@reduxjs/toolkit';

import { localeModel } from '@entities/locale';
import { themeModel }  from '@entities/theme';
import { InitState }   from '@server/types/state';

// TODO: move to app dir
export function initializeState(store: Store, { mode, locale }: InitState): void {
    store.dispatch(localeModel.actions.changeLocale(locale));
    store.dispatch(themeModel.actions.changeTheme(mode));
}
