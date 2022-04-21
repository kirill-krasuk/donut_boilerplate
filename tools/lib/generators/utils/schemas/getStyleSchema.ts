import { getStylesPath, getStylesTemplates } from '../path';

import type { StylePathProps }               from '../../types/common';
import type { CreateTuple }                  from '../../types/schema';

export function getStyleSchema(options: StylePathProps) {
    const { styleType } = options;

    const styles         = getStylesPath(options);
    const stylesTemplate = getStylesTemplates(styleType);

    const create = Array.isArray(styles)
        ? [
            [ styles[0], stylesTemplate[0] ],
            [ styles[1], stylesTemplate[1] ],
        ]
        : [ styles, stylesTemplate ];

    return {
        create: create as CreateTuple | CreateTuple[]
    };
}
