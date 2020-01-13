// @flow

export interface iTokenStorage {
    _token?: string;

    get token(): ?string;
    set token(token: string): void;

    hasToken(): boolean;
    clear(): void;
}
