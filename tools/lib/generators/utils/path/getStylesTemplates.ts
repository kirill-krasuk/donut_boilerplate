import { StylesType } from '../../types/common';

function getStylesTemplates(styleType?: StylesType) {
	return styleType === StylesType.Styled
		? [ './templates/styled-component.ejs', './templates/styled-reexport.ejs' ]
		: './templates/style.ejs';
}

export { getStylesTemplates };
