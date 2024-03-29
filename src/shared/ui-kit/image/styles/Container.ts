import styled, { css }      from 'styled-components';

import type { StyledProps } from '../types';

const getWidth = (width: StyledProps['width']) => (width
	? `${ width }px`
	: 'auto');

const getHeight = (height: StyledProps['height']) => (height
	? `${ height }px`
	: 'auto');

const Container = styled.div<StyledProps>`
	${ ({ width, height }) => css`
		position: relative;
		width: ${ getWidth(width) };
		height: ${ getHeight(height) };
	` }
`;

export { Container };
