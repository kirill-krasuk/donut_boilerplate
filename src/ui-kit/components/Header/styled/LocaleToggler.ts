/* eslint-disable indent */
import styled, { css, FlattenSimpleInterpolation } from 'styled-components/macro';

import { ThemedStyled }                            from '@core/types/theme';

export const LocaleToggler = styled.div`
    ${ ({ theme }: ThemedStyled): FlattenSimpleInterpolation => css`
        font-size: 2rem;
        color: ${ theme[theme.mode]['ui_ch_theme-icon'] };
        filter: brightness(1);
        margin-right: 20px;
        text-transform: uppercase;

        &:hover {
            cursor: pointer;
            filter: ${ theme.mode === 'light' ? 'brightness(0.85)' : 'brightness(1.14)' };
        }
    ` }
`;
