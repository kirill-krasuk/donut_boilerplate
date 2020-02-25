import Cookie           from 'js-cookie';

import { Action }       from '@core/types/actions';
import { CHANGE_THEME } from '@core/actions/theme';

export const themeMiddleware = () => (next: Function) => (action: Action) => {
    if (action.type === CHANGE_THEME) {
        Cookie.set('theme', action.payload);
    }

    return next(action);
};
