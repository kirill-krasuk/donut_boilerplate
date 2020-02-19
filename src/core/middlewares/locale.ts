import Cookie            from 'js-cookie';

import { CHANGE_LOCALE } from '@core/actions/locale';
import { ActionType } from '@core/types/actions';

export const localeMiddleware = () => (next: Function) => (action: ActionType) => {
    if (action.type === CHANGE_LOCALE) {
        Cookie.set('locale', action.payload);
    }

    return next(action);
};
