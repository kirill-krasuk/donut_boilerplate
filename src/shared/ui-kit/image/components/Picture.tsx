import {
    FC,
    Children,
    cloneElement,
    isValidElement
} from 'react';

import { replaceExtension } from '@utils/file';
import { PictureProps }     from '../types';

export const Picture: FC<PictureProps> = (props) => {
    const {
        webp,
        src,
        children
    } = props;

    return (
        <picture>
            { webp && <source srcSet={ replaceExtension(src, 'webp') } type="image/webp" /> }

            {
                Children.map(children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child, {
                            src
                        });
                    }
                    return child;
                })
            }
        </picture>
    );
};
