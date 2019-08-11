// @flow
import { injectable, inject } from 'inversify';
import type { GenericObject } from 'core/types/object';
import { TYPES }              from '../types';

@injectable()
export class ConfigManager {
    @inject(TYPES.config) _config: Object;

    defaultValues(options: GenericObject<mixed>): void {
        Object
            .keys(options)
            .forEach((key) => {
                if (!this._config[key] || (this._config[key] === '' || this._config[key] === undefined)) {
                    this._config[key] = options[key];
                }
            });
    }

    get(key: string): * {
        const option = this._config[key];

        if (/(true|false)/.test(option)) {
            return JSON.parse(option);
        }

        return option;
    }

    set(key: string, value: *): void {
        this._config[key] = value;
    }

    has(key: string): boolean {
        return !!this._config[key];
    }

    debug(): void {
        // eslint-disable-next-line
        console.log(this.constructor.name, this._config);
    }
}
