import { EStringFormatter } from '@core/enums/string';

const _snakeToCamel = <T extends string>(str: T, formatter: EStringFormatter): T => str
    .replace(/([a-z])/, (_match, s1) => (formatter === EStringFormatter.Upper ? s1.toUpperCase() : s1))
    .replace(/_([a-z])/g, (_match, s1) => s1.toUpperCase())
    .replace(/_/g, '') as T;

function snakeToCamel<T extends string = string>(formatter: EStringFormatter, str: T): T;
function snakeToCamel<T extends string = string>(formatter: EStringFormatter): (str: T) => T
function snakeToCamel<T extends string = string>(formatter: EStringFormatter = EStringFormatter.Lower, str?: T) {
    return !str
        ? (str: T): T => _snakeToCamel(str, formatter)
        : _snakeToCamel(str, formatter);
}

export { snakeToCamel };
