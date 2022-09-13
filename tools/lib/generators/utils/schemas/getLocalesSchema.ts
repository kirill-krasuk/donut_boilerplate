import { UpdateFileType }                from '../../types/schema';
import { getLocalesConfigFiles }         from '../getLocalesConfigFiles';

import type { CreateTuple, UpdateTuple } from '../../types/schema';

// TODO: complete path logic with new schema
function getLocalesSchema(directoryName: string) {
	const pathsToLocales = getLocalesConfigFiles();

	const create: CreateTuple = [
		`src/pages/${ directoryName }/config/locales.ts`,
		'./templates/locales.ejs'
	];

	const update = pathsToLocales.map<UpdateTuple>(localePath => [
		localePath,
		UpdateFileType.JSON
	]);

	return {
		create,
		update
	};
}

export { getLocalesSchema };
