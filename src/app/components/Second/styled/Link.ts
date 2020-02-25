import styled, { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { Link as ReactLink }                       from 'react-router-dom';

import { ThemedStyled }                            from '@core/types/theme';

export const Link = styled(ReactLink)`
    ${ ({ theme }: ThemedStyled): FlattenSimpleInterpolation => css`
        color: ${ theme[theme.mode].secondary };
    ` };
`;
