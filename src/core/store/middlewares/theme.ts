import { Middleware }        from 'redux';
import Cookie                from 'js-cookie';

import { Action }            from '@core/types/actions';
import { changeThemeAction } from '@core/store/actions/theme';

export const themeMiddleware: Middleware = () => (next: Function) => (action: Action) => (
    action.type === changeThemeAction.type
        ? (Cookie.set('theme', action.payload), next(action))
        : next(action)
);
