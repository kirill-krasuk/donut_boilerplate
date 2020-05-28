/* eslint-disable indent */
import styled, { css }    from 'styled-components/macro';

import { AnimationProps } from '../types';

export const AnimationContainer = styled.section<AnimationProps>`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;

    ${ ({ state }) => {
        switch (state) {
            case 'entering': return css`
                transform: scale(.5) translateX(3000px);
            `;

            case 'entered': return css`
                transform: scale(1) translateX(0);
                transition: transform 500ms ease-in;
            `;

            case 'exiting': return css`
                transform: scale(.5) translateX(-3000px);
                transition: transform 500ms ease-in;
            `;

            case 'exited': return css`
                transform: scale(.5);
                transition: transform 500ms ease-in;
            `;

            default: break;
        }
    } }
`;
