import { Middleware }   from 'redux';
import Cookie           from 'js-cookie';

import { Action }       from '@lib/redux';
import { changeLocale } from './actions';

export const middleware: Middleware = () => (next: Function) => (action: Action) => (
    action.type === changeLocale.type
        ? (Cookie.set('locale', action.payload), next(action))
        : next(action)
);
