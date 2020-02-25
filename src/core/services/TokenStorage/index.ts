import Cookie                            from 'js-cookie';

import { TokenStorage as ITokenStorage } from '@core/interfaces/TokenStorage';

class TokenStorage implements ITokenStorage {
    _token = '';

    constructor() {
        this._token = Cookie.get('auth_token') || '';
    }

    getToken(): string {
        return this._token;
    }

    setToken(token: string): void {
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
