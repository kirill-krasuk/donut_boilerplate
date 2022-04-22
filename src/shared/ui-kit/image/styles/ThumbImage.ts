import styled, { css }      from 'styled-components/macro';

import type { StyledProps } from '../types';

export const ThumbImage = styled.img<StyledProps>`
	${ ({ width, height }) => css`
		width: ${ width ? `${ width }px` : 'auto' };
		height: ${ height ? `${ height }px` : 'auto' };
		filter: blur(20px);
	` }
`;
