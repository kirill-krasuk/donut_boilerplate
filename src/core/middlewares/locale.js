// @flow
import Cookie            from 'js-cookie';

import { CHANGE_LOCALE } from 'core/actions/locale';

const localeMiddleware = () => (next: Function) => (action: Object) => {
    if (action.type === CHANGE_LOCALE) {
        Cookie.set('locale', action.payload);
    }

    return next(action);
};

export { localeMiddleware };
