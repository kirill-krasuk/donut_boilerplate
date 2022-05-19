import fs from 'node:fs';

function getLocalesConfigFiles() {
	// TODO: move to constant
	const pathToLocales = 'src/shared/config/locales/';

	return fs
		.readdirSync(`${ process.cwd() }/${ pathToLocales }`)
		.filter(file => file.endsWith('json'))
		.map(file => pathToLocales + file);
}

export { getLocalesConfigFiles };
