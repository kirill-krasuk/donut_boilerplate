import { Middleware }   from '@reduxjs/toolkit';
import Cookie           from 'js-cookie';

import { changeLocale } from './actions';

export const middleware: Middleware = () => (next) => (action) => (
    action.type === changeLocale.type
        ? (Cookie.set('locale', action.payload), next(action))
        : next(action)
);
