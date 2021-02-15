import { ILocale }   from '@eo-locale/core';

import appEnMessages from '@app/locales/en.json';
import appRuMessages from '@app/locales/ru.json';
import uiEnMessages  from '@ui-kit/locales/en.json';
import uiRuMessages  from '@ui-kit/locales/ru.json';

const enMessages = {
    ...appEnMessages,
    ...uiEnMessages
};

const ruMessages = {
    ...appRuMessages,
    ...uiRuMessages
};

const locales: ILocale[] = [ {
    language: 'en',
    messages: enMessages
}, {
    language: 'ru',
    messages: ruMessages
} ];

export default locales;
