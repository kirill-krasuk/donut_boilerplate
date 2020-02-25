export interface ConfigManager {
    _config: Record<string, any>;

    debug(): void;

    defaultValues(options: Record<string, any>): void;

    get(prop: string): any;
    set(key: string, value: any): void;
    has(key: string): boolean;
}
