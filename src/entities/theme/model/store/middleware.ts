import { Middleware }       from 'redux';
import Cookie               from 'js-cookie';

import { Action }           from '@lib/redux';
import { setDataThemeAttr } from '@lib/dom';
import { changeTheme }      from './actions';

export const middleware: Middleware = () => (next: Function) => (action: Action) => {
    if (action.type === changeTheme.type) {
        Cookie.set('theme', action.payload);

        if (__IS_CLIENT__) {
            setDataThemeAttr(action.payload);
        }
    }

    return next(action);
};
