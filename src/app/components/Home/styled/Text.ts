import styled, { css, FlattenSimpleInterpolation } from 'styled-components/macro';

import { ThemedStyled }                            from '@core/types/theme';

export const Text = styled.span`
    ${ ({ theme }: ThemedStyled): FlattenSimpleInterpolation => css`
        font-weight: 500;
        color: ${ theme.dark.secondary };
        font-size: 1.42rem;
        margin-bottom: 10px;
    ` };
`;
