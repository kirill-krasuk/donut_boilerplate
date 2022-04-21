import { StylesType } from '../../types/common';

export function getStylesTemplates(styleType?: StylesType) {
    return styleType === StylesType.Styled
        ? [
            './templates/styled-component.ejs',
            './templates/styled-reexport.ejs'
        ]
        : './templates/style.ejs';
}
