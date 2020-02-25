import { EStringFormatter } from '@core/enums/string';

export const snakeToCamel = <T extends string = string>(str: T, formatter: EStringFormatter = EStringFormatter.Lower): T => str
    .replace(/([a-z])/, (_match, s1) => (formatter === EStringFormatter.Upper ? s1.toUpperCase() : s1))
    .replace(/_([a-z])/g, (_match, s1) => s1.toUpperCase())
    .replace(/_/g, '') as T;
