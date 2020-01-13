// @flow

import Cookie           from 'js-cookie';

import { CHANGE_THEME } from 'core/actions/theme';

export const themeMiddleware = () => (next: Function) => (action: Object) => {
    if (action.type === CHANGE_THEME) {
        Cookie.set('theme', action.payload);
    }

    return next(action);
};
