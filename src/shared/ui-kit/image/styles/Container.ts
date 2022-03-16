import styled, { css } from 'styled-components/macro';

import { StyledProps } from '../types';

export const Container = styled.div<StyledProps>`
    ${ ({ width, height }) => css`
        width: ${ width ? `${ width }px` : 'auto' };
        height: ${ height ? `${ height }px` : 'auto' };
        position: relative;
    ` }
`;
