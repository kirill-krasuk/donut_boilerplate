import { cssExtensionsMap }    from '../../constants/extensions';
import { StylesType }          from '../../types/common';

import type { StylePathProps } from '../../types/common';

// FIXME refactoring styleType
function getStylesPath({ styleType, directoryName, layer }: StylePathProps) {
	if (!styleType) {
		throw new Error('Style type is not defined');
	}

	const styledComponentsPath = [
		`src/${ layer }/${ directoryName }/ui/styles/Example.ts`,
		`src/${ layer }/${ directoryName }/ui/styles/index.ts`
	];

	return styleType === StylesType.Styled
		? styledComponentsPath
		: `src/${ layer }/${ directoryName }/ui/style${ cssExtensionsMap[styleType] }`;
}

export { getStylesPath };
