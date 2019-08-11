// @flow
import type { GenericObject } from 'core/types/object';

export interface iConfigManager {
    _config: Object;

    debug(): void;

    defaultValues(options: GenericObject<mixed>): void;

    get(prop: string): *;
    set(key: string, value: *): void;
    has(key: string): boolean;
}
