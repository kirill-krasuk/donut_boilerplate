import { Locale } from '@eo-locale/core';

import enMessages from '@app/config/locales/en.json';
import ruMessages from '@app/config/locales/ru.json';

const locales: Locale[] = [ {
    language: 'en',
    messages: enMessages
}, {
    language: 'ru',
    messages: ruMessages
} ];

export default locales;
