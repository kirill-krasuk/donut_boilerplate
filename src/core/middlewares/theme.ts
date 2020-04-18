import { Middleware }   from 'redux';
import Cookie           from 'js-cookie';

import { Action }       from '@core/types/actions';
import { CHANGE_THEME } from '@core/actions/theme';

const setTheme = (action: Action, next: Function): Function => {
    Cookie.set('theme', action.payload);

    return next(action);
};

export const themeMiddleware: Middleware = () => (next: Function) => (action: Action): Function => (
    action.type === CHANGE_THEME
        ? setTheme(action, next)
        : next(action)
);
