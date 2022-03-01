import { Middleware }        from 'redux';
import Cookie                from 'js-cookie';

import { Action }            from '@lib/redux';
import { changeThemeAction } from '@client/store/actions/theme';
import { setDataThemeAttr }  from '@lib/dom';

export const themeMiddleware: Middleware = () => (next: Function) => (action: Action) => {
    if (action.type === changeThemeAction.type) {
        Cookie.set('theme', action.payload);

        if (__IS_CLIENT__) {
            setDataThemeAttr(action.payload);
        }
    }

    return next(action);
};
