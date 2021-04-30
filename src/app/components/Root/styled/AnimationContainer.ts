/* eslint-disable indent */
import styled, { css }    from 'styled-components/macro';

import { AnimationProps } from '../types';

export const AnimationContainer = styled.section<AnimationProps>`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    min-height: 100vh;
    background-color: var(--background);

    ${ ({ state }) => {
        switch (state) {
            case 'entering': return css`
                transform: scale(.65) translateX(3000px) rotateY(-50deg);
            `;

            case 'entered': return css`
                transform: scale(1) translateX(0) rotateY(0deg);
                transition: transform 650ms ease-in;
            `;

            case 'exiting': return css`
                transform: scale(.65) translateX(-3000px) rotateY(50deg);
                transition: transform 650ms ease-in;
            `;

            case 'exited': return css`
                transform: scale(0) rotateY(0deg);
                transition: transform 650ms ease-in;
            `;

            default: break;
        }
    } }
`;
