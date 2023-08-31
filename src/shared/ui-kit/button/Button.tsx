import { ButtonSizes, ButtonThemes } from './enums';
import * as S                        from './styles';

import type { FC }                   from 'react';
import type { ButtonProps }          from './types';

/**
 * This is Button component for donut boilerplate
 */
const Button: FC<ButtonProps> = ({
	// default props used for storybook docs
	onClick = () => {},
	children,
	size = ButtonSizes.Medium,
	theme = ButtonThemes.Primary
}) => (
	<S.Wrapper
		size={ size }
		theme={ theme }
		onClick={ onClick }
	>
		{ children }
	</S.Wrapper>
);

export { Button };
