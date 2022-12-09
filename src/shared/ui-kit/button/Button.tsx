import { ButtonSizes, ButtonThemes } from './enums';
import * as S                        from './styles';

import type { FC }                   from 'react';
import type { ButtonProps }          from './types';

const defaultProps = {
	size   : ButtonSizes.Medium,
	theme  : ButtonThemes.Primary,
	onClick: () => {}
};

/**
 * This is Button component for donut boilerplate
 */
const Button: FC<ButtonProps> = props => {
	const {
		onClick,
		children,
		size,
		theme
	} = { ...defaultProps, ...props };

	return (
		<S.Wrapper size={ size } theme={ theme } onClick={ onClick }>
			{ children }
		</S.Wrapper>
	);
};

export { Button };
export default Button;
