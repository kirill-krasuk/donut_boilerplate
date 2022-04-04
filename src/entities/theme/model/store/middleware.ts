import { Middleware }            from '@reduxjs/toolkit';
import Cookie                    from 'js-cookie';

import { setDataThemeAttribute } from '@lib/dom';
import { changeTheme }           from './actions';

export const middleware: Middleware = () => (next) => (action) => {
    if (action.type === changeTheme.type) {
        Cookie.set('theme', action.payload);

        if (__IS_CLIENT__) {
            setDataThemeAttribute(action.payload);
        }
    }

    return next(action);
};
