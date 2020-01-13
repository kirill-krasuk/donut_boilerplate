// @flow
import Cookie                 from 'js-cookie';

import type { iTokenStorage } from 'core/interfaces/TokenStorage';

class TokenStorage implements iTokenStorage {
    _token: string = '';

    constructor() {
        this._token = Cookie.get('auth_token') || '';
    }

    get token() {
        return this._token;
    }

    set token(token: string) {
        this._token = token;

        Cookie.set('auth_token', token);
    }

    hasToken(): boolean {
        return !!this._token;
    }

    clear = (): void => {
        Cookie.remove('auth_token');

        this._token = '';
    }
}

export default new TokenStorage();
