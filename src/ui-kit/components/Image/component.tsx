import React                from 'react';
import { hot }              from 'react-hot-loader/root';

import { replaceExtension } from '@core/utils/file';
import { Props }            from './types';

// TODO: complete

const Image: React.FC<Props> = (props) => {
    const { src, webp } = props;

    return (
        <picture>
            { webp && <source srcSet={ replaceExtension(src, 'webp') } type="image/webp" /> }
            <img src={ src } />
        </picture>
    );
};

export default hot(Image);
