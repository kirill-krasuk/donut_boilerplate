import { StringFormatter } from '../enums/formatter';

const _snakeToCamel = <T extends string>(str: T, formatter: StringFormatter): T => str
    .replace(/([a-z])/, (_match, s1) => (formatter === StringFormatter.Upper ? s1.toUpperCase() : s1))
    .replace(/_([a-z])/g, (_match, s1) => s1.toUpperCase())
    .replace(/_/g, '') as T;

function snakeToCamel<T extends string = string>(formatter: StringFormatter, str: T): T;
function snakeToCamel<T extends string = string>(formatter: StringFormatter): (str: T) => T;
function snakeToCamel<T extends string = string>(formatter: StringFormatter = StringFormatter.Lower, str?: T) {
    return !str
        ? (str: T): T => _snakeToCamel(str, formatter)
        : _snakeToCamel(str, formatter);
}

export { snakeToCamel };
