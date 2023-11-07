import { camelToKebab }                     from '../../../../src/shared/lib/string';
import { UpdateFileType }                   from '../types/schema';
import { getLocalesSchema, getStyleSchema } from '../utils/schemas';
import { getSchemaFragment }                from '../utils/schemas/getSchemaFragment';

import type { Schema, SchemaConfig }        from '../types/schema';
import type { Layer, StylesType }           from '../types/common';

type SchemaProps = {
	name: string,
	styleType: StylesType | null,
	layer: Layer,
	isNeedLocales: boolean,
	isNeedLazy: boolean
};

const generateSchema = (props: SchemaProps): Schema => {
	const {
		name,
		styleType,
		layer,
		isNeedLocales,
		isNeedLazy
	} = props;

	const directoryName = camelToKebab(name);

	console.info(isNeedLazy);

	const locales = getSchemaFragment(isNeedLocales, getLocalesSchema(directoryName));
	const styles  = getSchemaFragment(
		!!styleType,
		getStyleSchema({
			styleType,
			directoryName,
			layer
		})
	);

	// TODO: more settings
	const schema: SchemaConfig = {
		pages: {
			index: {
				create: [ `src/pages/${ directoryName }/index.tsx`, './templates/page-entrypoint.ejs' ]
			},
			component: {
				create: [ `src/pages/${ directoryName }/ui/${ name }.tsx`, './templates/component.ejs' ]
			},
			routes: {
				update: [ 'src/shared/config/routes.ts', UpdateFileType.Routes ]
			},
			locales,
			styles
		}
	};

	return schema[layer];
};

export { generateSchema };
