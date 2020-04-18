import { Middleware }   from 'redux';
import Cookie           from 'js-cookie';

import { Action }       from '@core/types/actions';
import { CHANGE_THEME } from '@core/actions/theme';

export const themeMiddleware: Middleware = () => (next: Function) => (action: Action): Function => (
    action.type === CHANGE_THEME
        ? Cookie.set('theme', action.payload)
        : next(action)
);
