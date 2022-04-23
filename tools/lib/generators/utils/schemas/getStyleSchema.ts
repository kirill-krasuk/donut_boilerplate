import { getStylesPath, getStylesTemplates } from '../path';

import type { StylePathProps }               from '../../types/common';
import type { CreateTuple }                  from '../../types/schema';

function getStyleSchema(options: StylePathProps) {
	const { styleType } = options;

	const styles         = getStylesPath(options);
	const stylesTemplate = getStylesTemplates(styleType);

	const stylesArrayOfTuple = [
		[ styles[0], stylesTemplate[0] ],
		[ styles[1], stylesTemplate[1] ]
	];

	const stylesTuple = [ styles, stylesTemplate ];

	const create = Array.isArray(styles)
		? stylesArrayOfTuple
		: stylesTuple;

	return { create: create as CreateTuple | CreateTuple[] };
}

export { getStyleSchema };
