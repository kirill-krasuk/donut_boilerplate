import { Middleware }         from 'redux';
import Cookie                 from 'js-cookie';

import { Action }             from '@shared/types/actions';
import { changeLocaleAction } from '@core/store/actions/locale';

export const localeMiddleware: Middleware = () => (next: Function) => (action: Action) => (
    action.type === changeLocaleAction.type
        ? (Cookie.set('locale', action.payload), next(action))
        : next(action)
);
