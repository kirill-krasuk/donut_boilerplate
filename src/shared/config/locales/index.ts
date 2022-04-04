import { Locale }             from '@eo-locale/core';
import { PropertyStringPath } from '@shared/types/utility';

import enMessages             from './en.json';
import ruMessages             from './ru.json';

export type AppLocales = typeof enMessages;

export type Locales<T extends keyof AppLocales> = Record<string, PropertyStringPath<Pick<AppLocales, T>>>;

const locales: Locale[] = [ {
    language: 'en',
    messages: enMessages
}, {
    language: 'ru',
    messages: ruMessages
} ];

export default locales;
