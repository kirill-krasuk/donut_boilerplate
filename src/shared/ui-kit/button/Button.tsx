import { ButtonSizes, ButtonStyles } from './enums';
import * as S                        from './styles';

import type { FC }                   from 'react';
import type { ButtonProps }          from './types';

/**
 * This is Button component for donut boilerplate
 */
const Button: FC<ButtonProps> = props => {
	const {
		onClick,
		children,
		size,
		style
	} = props;

	return (
		<S.Wrapper cStyle={ style } size={ size } onClick={ onClick }>
			{ children }
		</S.Wrapper>
	);
};

Button.defaultProps = {
	size : ButtonSizes.Medium,
	style: ButtonStyles.Primary
};

export { Button };
export default Button;
