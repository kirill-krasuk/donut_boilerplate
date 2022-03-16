import { FC, useRef, useState }   from 'react';

import { createIntersectionHook } from '@shared/hooks';
import { Image }                  from './Image';
import { Props }                  from './types';
import * as S                     from './styles';

const { useIntersection } = createIntersectionHook({
    rootMargin: '40px',
    threshold : 0
});

export const LazyImage: FC<Props> = (props) => {
    const { width } = props;

    const [ isVisible, setIsVisible ] = useState(false);

    const containerRef = useRef<HTMLImageElement>(null);

    useIntersection(containerRef, () => {
        setIsVisible(true);
    }, { once: true });

    return (
        <S.Container ref={ containerRef } width={ width }>
            { isVisible && <Image { ...props } /> }
        </S.Container>
    );
};

export default LazyImage;
