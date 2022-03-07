import { Store }       from 'redux';

import { localeModel } from '@entities/locale';
import { themeModel }  from '@entities/theme';
import { InitState }   from '@server/types/state';

export function initializeState(store: Store, { mode, locale }: InitState): void {
    store.dispatch(localeModel.actions.changeLocale(locale));
    store.dispatch(themeModel.actions.changeTheme(mode));
}
