import styled, { css }                            from 'styled-components';

import type { HTMLAttributes, MouseEventHandler } from 'react';
import type { ButtonSizes, ButtonThemes }         from '../enums';

type Props = HTMLAttributes<HTMLButtonElement> & {
	size?: ButtonSizes,
	theme?: ButtonThemes,
	onClick: MouseEventHandler<HTMLButtonElement> | null
};

const Wrapper = styled.button<Props>`
	${ ({ size, theme }) => css`
		cursor: pointer;

		height: ${ size };

		color: var(--${ theme });

		background-color: white;
		border: 1px solid var(--${ theme });
		border-radius: 10px;
		outline: none;

		&:hover {
			background-color: #efefef;
		}
	` }
`;

export { Wrapper };
