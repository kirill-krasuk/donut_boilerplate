import { Store }              from 'redux';

import { changeThemeAction }  from '@core/actions/theme';
import { changeLocaleAction } from '@core/actions/locale';
import { Locale }             from '@core/enums/locale';
import { Theme }              from '@core/enums/theme';

type InitState = {
    mode: Theme;
    locale: Locale;
}

export function initializeState(store: Store, { mode, locale }: InitState): void {
    store.dispatch(changeLocaleAction(locale));
    store.dispatch(changeThemeAction(mode));
}
