import * as S                         from '../styles';
import { Picture }                    from './Picture';

import type { FC }                    from 'react';
import type { ProgressiveImageProps } from '../types';

export const ProgressiveImage: FC<ProgressiveImageProps> = props => {
	const {
		width, height, src, loadingWidth, isLoaded, webp, alt, handleLoad
	} = props;

	const source = width ? `${ src }?resize=${ width }` : src;

	const thumbSource = `${ src }?resize=${ loadingWidth }`;

	return (
		<>
			{ !isLoaded && (
				<Picture src={ thumbSource } webp={ webp }>
					<S.ThumbImage alt={ alt } height={ height } width={ width } />
				</Picture>
			) }

			<Picture src={ source } webp={ webp }>
				<S.ImgContainer
					alt={ alt }
					height={ height }
					isLoaded={ isLoaded }
					width={ width }
					onLoad={ handleLoad }
				/>
			</Picture>
		</>
	);
};
