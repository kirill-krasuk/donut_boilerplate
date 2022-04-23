import { createLocales } from '@lib/locales';

const locales = createLocales<'HomePage'>()({
	title: 'HomePage.title',
	link : 'HomePage.link',
	path : 'HomePage.path'
});

export { locales };
