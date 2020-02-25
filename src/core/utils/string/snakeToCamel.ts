import { EStringFormatter } from '@core/enums/string';

export const snakeToCamel = (str: string, formatter: EStringFormatter = EStringFormatter.Lower): string => str
    .replace(/([a-z])/, (_match, s1) => (formatter === EStringFormatter.Upper ? s1.toUpperCase() : s1))
    .replace(/_([a-z])/g, (_match, s1) => s1.toUpperCase())
    .replace(/_/g, '');
