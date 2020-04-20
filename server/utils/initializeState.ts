import { Store }              from 'redux';

import { changeThemeAction }  from '@core/actions/theme';
import { changeLocaleAction } from '@core/actions/locale';
import { ELocale }            from '@core/enums/locale';
import { ETheme }             from '@core/enums/theme';

type InitState = {
    mode: ETheme;
    locale: ELocale;
}

export function initializeState(store: Store, { mode, locale }: InitState): void {
    store.dispatch(changeLocaleAction(locale));
    store.dispatch(changeThemeAction(mode));
}
