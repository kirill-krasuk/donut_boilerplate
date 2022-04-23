import enMessages      from './en.json';
import ruMessages      from './ru.json';

import type { Locale } from '@eo-locale/core';

const locales: Locale[] = [
	{
		language: 'en',
		messages: enMessages
	},
	{
		language: 'ru',
		messages: ruMessages
	}
];

type AppLocales = typeof enMessages;

export type { AppLocales };
export default locales;
