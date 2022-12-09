import styled, { css }      from 'styled-components/macro';

import type { StyledProps } from '../types';

const getWidth = (width: StyledProps['width']) => (width
	? `${ width }px`
	: 'auto');

const getHeight = (height: StyledProps['height']) => (height
	? `${ height }px`
	: 'auto');

const getPosition = (isLoaded: StyledProps['isLoaded']) =>
	(isLoaded
		? 'static'
		: 'absolute');

const ImgContainer = styled.img<StyledProps>`
	${ ({ width, height, isLoaded = true }) => css`
		width: ${ getWidth(width) };
		height: ${ getHeight(height) };
		position: ${ getPosition(isLoaded) };
		${ !isLoaded &&
		css`
			z-idex: -1;
			top: 0;
			left: 0;
		` };
	` }
`;

export { ImgContainer };
