import styled, { css } from 'styled-components/macro';

import { getSpacing }  from '@lib/styles';
import { Props }       from './types';

export const Col = styled.div<Props>`
    ${ ({ padding, margin }) => css`
        display: flex;
        flex-direction: column;
        padding: ${ getSpacing(padding) };
        margin: ${ getSpacing(margin) };
    ` }
`;
