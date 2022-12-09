import { useState }                  from 'react';

import { Picture, ProgressiveImage } from './components';
import { imageConfig }               from './config';
import * as S                        from './styles';

import type { FC }                   from 'react';
import type { Props }                from './types';

const defaultProps = {
	loadingWidth: imageConfig.loadingWidth
};

const Image: FC<Props> = props => {
	const {
		src,
		webp,
		alt,
		width,
		height,
		loadingWidth,
		progressive
	} = {
		...defaultProps,
		...props
	};

	const [ isLoaded, setIsLoaded ] = useState(false);

	const handleLoad = () => {
		setIsLoaded(true);
	};

	const renderProgressiveImage = () => {
		if (progressive) {
			return (
				<ProgressiveImage
					alt={ alt }
					handleLoad={ handleLoad }
					height={ height }
					isLoaded={ isLoaded }
					loadingWidth={ loadingWidth }
					src={ src }
					webp={ webp }
					width={ width }
				/>
			);
		}

		return (
			<Picture src={ src } webp={ webp }>
				<S.ImgContainer
					alt={ alt }
					height={ height }
					width={ width }
					onLoad={ handleLoad }
				/>
			</Picture>
		);
	};

	return (
		<S.Container height={ height } width={ width }>
			{ renderProgressiveImage() }
		</S.Container>
	);
};

export { Image };
export default Image;
