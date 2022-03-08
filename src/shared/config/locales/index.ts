import { Locale } from '@eo-locale/core';

import enMessages from './en.json';
import ruMessages from './ru.json';

const locales: Locale[] = [ {
    language: 'en',
    messages: enMessages
}, {
    language: 'ru',
    messages: ruMessages
} ];

export default locales;
