import styled              from 'styled-components/macro';

import { THEME_ICON_SIZE } from '@ui-kit/constants/header';
import { Theme }           from '@core/types/theme';

export const ThemeIcon = styled.div`
    & svg {
        height: ${ THEME_ICON_SIZE };
        width: ${ THEME_ICON_SIZE };
        color: var(--icon);
        filter: brightness(1);
        margin-left: 20px;

        &:hover {
            cursor: pointer;
            filter: ${ ({ theme }: Theme) => (!theme.isDark ? 'brightness(0.85)' : 'brightness(1.14)') }; 
        }
    }
`;
