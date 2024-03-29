import styled, { css }         from 'styled-components';

import type { AnimationProps } from '../types';

function animationState({ state }: AnimationProps) {
	switch (state) {
		case 'entering':
			return css`
				transform: scale(0.65) translateX(3000px) rotateY(-50deg);
			`;

		case 'entered':
			return css`
				transform: scale(1) translateX(0) rotateY(0deg);
				transition: transform 650ms ease-in;
			`;

		case 'exiting':
			return css`
				transform: scale(0.65) translateX(-3000px) rotateY(50deg);
				transition: transform 650ms ease-in;
			`;

		case 'exited':
			return css`
				transform: scale(0) rotateY(0deg);
				transition: transform 650ms ease-in;
			`;

		default:
			return;
	}
}

const AnimationContainer = styled.section<AnimationProps>`
	position: absolute;
	top: 0;
	left: 0;

	width: 100%;
	min-height: 100vh;

	background-color: var(--background);
	${ animationState }
`;

export { AnimationContainer };
