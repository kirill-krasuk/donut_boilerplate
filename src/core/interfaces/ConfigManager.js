// @flow

export interface iConfigManager {
    _config: Object;

    debug(): void;

    defaultValues(options: { [key: string]: * }): void;

    get(prop: string): *;
    set(key: string, value: *): void;
    has(key: string): boolean;
}
