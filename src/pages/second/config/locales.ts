import { createLocales } from '@lib/locales';

const locales = createLocales<'SecondPage'>()({
	title    : 'SecondPage.title',
	toHome   : 'SecondPage.links.toHome',
	toProtect: 'SecondPage.links.toProtect',
	path     : 'SecondPage.path'
});

export { locales };
