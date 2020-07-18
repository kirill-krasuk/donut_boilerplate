import styled, { css } from 'styled-components/macro';

import { getSpacing }  from '@utils/styles';
import { Props }       from './types';

export const Spacing = styled.div<Props>`
    ${ ({ padding, margin }) => css`
        padding: ${ getSpacing(padding) };
        margin: ${ getSpacing(margin) };
    ` }
`;
