import styled, { css } from 'styled-components/macro';

import { StyledProps } from '../types';

export const ImgContainer = styled.img<StyledProps>`
    ${ ({ width, height, isLoaded }) => css`
        width: ${ width ? `${ width }px` : 'auto' };
        height: ${ height ? `${ height }px` : 'auto' };
        position: ${ isLoaded ? 'static' : 'absolute' };
        ${ !isLoaded && css`
                zIdex: -1;
                top: 0;
                left: 0;
            `
        };
    ` }
`;

ImgContainer.defaultProps = {
    isLoaded: true
};