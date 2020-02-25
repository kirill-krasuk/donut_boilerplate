export interface TokenStorage {
    _token?: string;

    getToken(): string | undefined | null;
    setToken(token: string): void;

    hasToken(): boolean;
    clear(): void;
}
