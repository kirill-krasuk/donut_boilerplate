import { useRef, useState }       from 'react';

import { createIntersectionHook } from '@shared/hooks';

import { Image }                  from './Image';
import * as S                     from './styles';

import type { FC }                from 'react';
import type { Props }             from './types';

const { useIntersection } = createIntersectionHook({
	rootMargin: '40px',
	threshold : 0
});

const LazyImage: FC<Props> = props => {
	const { width } = props;

	const [ isVisible, setIsVisible ] = useState(false);

	const containerRef = useRef<HTMLImageElement>(null);

	useIntersection(
		containerRef,
		() => {
			setIsVisible(true);
		},
		{ once: true }
	);

	return (
		<S.Container ref={ containerRef } width={ width }>
			{ isVisible && <Image { ...props } /> }
		</S.Container>
	);
};

export { LazyImage };
export default LazyImage;
