import styled, { css } from 'styled-components/macro';

import { getSpacing }  from '@lib/styles';
import { Props }       from './types';

export const Row = styled.div<Props>`
    ${ ({ padding, margin }) => css`
        display: flex;
        padding: ${ getSpacing(padding) };
        margin: ${ getSpacing(margin) };
    ` }
`;
