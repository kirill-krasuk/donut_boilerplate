import { Middleware }    from 'redux';
import Cookie            from 'js-cookie';

import { Action }        from '@core/types/actions';
import { CHANGE_LOCALE } from '@core/actions/locale';

export const localeMiddleware: Middleware = () => (next: Function) => (action: Action): Function => (
    action.type === CHANGE_LOCALE
        ? (Cookie.set('locale', action.payload), next(action))
        : next(action)
);
