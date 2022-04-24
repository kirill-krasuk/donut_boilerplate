import {
	Children,
	cloneElement,
	FC,
	isValidElement
} from 'react';

import { replaceExtension }  from '@shared/lib/file';

import type { PictureProps } from '../types';

const Picture: FC<PictureProps> = props => {
	const { webp, src, children } = props;

	return (
		<picture>
			{ webp && <source srcSet={ replaceExtension(src, 'webp') } type='image/webp' /> }

			{ Children.map(children, child => {
				if (isValidElement(child)) {
					return cloneElement(child, {
						src
					});
				}
				return child;
			}) }
		</picture>
	);
};

export { Picture };
