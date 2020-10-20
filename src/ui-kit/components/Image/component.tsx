import { FC }               from 'react';
import { replaceExtension } from '@utils/file';
import { Props }            from './types';

// TODO: complete

const Image: FC<Props> = (props) => {
    const { src, webp } = props;

    return (
        <picture>
            { webp && <source srcSet={ replaceExtension(src, 'webp') } type="image/webp" /> }
            <img src={ src } />
        </picture>
    );
};

export default Image;
