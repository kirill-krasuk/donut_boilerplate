import type { AppLocales }         from '@shared/config/locales';
import type { PropertyStringPath } from '@shared/types/utility';

type Locales<T extends Record<string, any>, L extends keyof AppLocales> = Record<
    keyof T,
    PropertyStringPath<Pick<AppLocales, L>>
>;

export const createLocales = <L extends keyof AppLocales>() => <T extends Locales<T, L>>(schema: T): Locales<T, L> => schema;
