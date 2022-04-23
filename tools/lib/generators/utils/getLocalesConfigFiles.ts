import fs   from 'node:fs';
import path from 'node:path';

function getLocalesConfigFiles() {
	// TODO: move to constant
	const pathToLocales = 'src/shared/config/locales/';

	return fs
		.readdirSync(path.resolve(__dirname, '../../../..', pathToLocales))
		.filter(file => file.endsWith('json'))
		.map(file => pathToLocales + file);
}

export { getLocalesConfigFiles };
