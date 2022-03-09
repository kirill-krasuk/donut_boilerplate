import { FC }               from 'react';
import { replaceExtension } from '@utils/file';
import { Props }            from './types';

// TODO: complete

export const Image: FC<Props> = (props) => {
    const { src, webp, alt } = props;

    return (
        <picture>
            { webp && <source srcSet={ replaceExtension(src, 'webp') } type="image/webp" /> }

            <img alt={ alt } src={ src } />
        </picture>
    );
};

export default Image;
