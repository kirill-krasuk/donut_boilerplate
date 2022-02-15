import { Store }              from 'redux';

import { changeThemeAction }  from '@client/store/actions/theme';
import { changeLocaleAction } from '@client/store/actions/locale';
import { InitState }          from '@server/types/state';

export function initializeState(store: Store, { mode, locale }: InitState): void {
    store.dispatch(changeLocaleAction(locale));
    store.dispatch(changeThemeAction(mode));
}
