import styled, { css }     from 'styled-components/macro';

import { Theme }           from '@core/types/theme';
import { THEME_ICON_SIZE } from '@ui-kit/constants/header';

export const ThemeIcon = styled.div`
    ${ ({ theme }: Theme) => css`
        & svg {
            height: ${ THEME_ICON_SIZE };
            width: ${ THEME_ICON_SIZE };
            color: ${ theme[theme.mode]['ui_ch_theme-icon'] };
            filter: brightness(1);
            margin-left: 20px;

            &:hover {
                cursor: pointer;
                filter: ${ theme.mode === 'light' ? 'brightness(0.85)' : 'brightness(1.14)' };
            }
        }
    ` };
`;
