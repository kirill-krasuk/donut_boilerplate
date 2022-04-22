import styled, { css }                    from 'styled-components/macro';

import type { MouseEventHandler }         from 'react';
import type { ButtonSizes, ButtonStyles } from '../enums';

type Props = {
	size: ButtonSizes,
	cStyle: ButtonStyles,
	onClick?: MouseEventHandler<HTMLButtonElement>
};

export const Wrapper = styled.button<Props>`
	${ ({ size, cStyle }) => css`
		height: ${ size };
		color: var(--${ cStyle });
		background-color: white;
		border-radius: 10px;
		border: 1px solid var(--${ cStyle });
		outline: none;
		cursor: pointer;

		&:hover {
			background-color: #efefef;
		}
	` }
`;
