import styled, { css } from 'styled-components/macro';

import { Theme }       from '@core/types/theme';

export const LocaleToggler = styled.div`
    ${ ({ theme }: Theme) => css`
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
