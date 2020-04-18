import { Middleware }    from 'redux';
import Cookie            from 'js-cookie';

import { Action }        from '@core/types/actions';
import { CHANGE_LOCALE } from '@core/actions/locale';

const setLocale = (action: Action, next: Function): Function => {
    Cookie.set('locale', action.payload);

    return next(action);
};

export const localeMiddleware: Middleware = () => (next: Function) => (action: Action): Function => (
    action.type === CHANGE_LOCALE
        ? setLocale(action, next)
        : next(action)
);
