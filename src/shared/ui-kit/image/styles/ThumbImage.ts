import styled, { css }      from 'styled-components/macro';

import type { StyledProps } from '../types';

const getWidth = (width: StyledProps['width']) => (width
	? `${ width }px`
	: 'auto');

const getHeight = (height: StyledProps['height']) => (height
	? `${ height }px`
	: 'auto');

const ThumbImage = styled.img<StyledProps>`
	${ ({ width, height }) => css`
		width: ${ getWidth(width) };
		height: ${ getHeight(height) };
		filter: blur(20px);
	` }
`;

export { ThumbImage };
