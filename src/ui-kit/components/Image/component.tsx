import React, { FC }        from 'react';

import { replaceExtension } from '@core/utils/file';
import { Props }            from './types';

// TODO: complete

const Image: FC<Props> = (props): JSX.Element => {
    const { src, webp } = props;

    return (
        <picture>
            { webp && <source srcSet={ replaceExtension(src, 'webp') } type="image/webp" /> }
            <img src={ src } />
        </picture>
    );
};

export default Image;
