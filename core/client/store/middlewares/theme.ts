import { Middleware }        from 'redux';
import Cookie                from 'js-cookie';

import { Action }            from '@shared/types/actions';
import { changeThemeAction } from '@client/store/actions/theme';
import { setDataThemeAttr }  from '@utils/dom';

export const themeMiddleware: Middleware = () => (next: Function) => (action: Action) => {
    if (action.type === changeThemeAction.type) {
        Cookie.set('theme', action.payload);

        if (__IS_CLIENT__) {
            setDataThemeAttr(action.payload);
        }
    }

    return next(action);
};
