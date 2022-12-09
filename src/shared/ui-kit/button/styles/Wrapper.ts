import styled, { css }                            from 'styled-components/macro';

import type { HTMLAttributes, MouseEventHandler } from 'react';
import type { ButtonSizes, ButtonThemes }         from '../enums';

type Props = HTMLAttributes<HTMLButtonElement> & {
	size?: ButtonSizes,
	theme?: ButtonThemes,
	onClick: MouseEventHandler<HTMLButtonElement> | null
};

const Wrapper = styled.button<Props>`
	${ ({ size, theme }) => css`
		height: ${ size };
		color: var(--${ theme });
		background-color: white;
		border-radius: 10px;
		border: 1px solid var(--${ theme });
		outline: none;
		cursor: pointer;

		&:hover {
			background-color: #efefef;
		}
	` }
`;

export { Wrapper };
