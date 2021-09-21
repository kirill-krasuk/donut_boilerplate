import styled              from 'styled-components/macro';

import { THEME_ICON_SIZE } from '@ui-kit/constants/header';
import { Theme }           from '@core/types/theme';

export const ThemeIcon = styled.div`
    & svg {
        width: ${ THEME_ICON_SIZE };
        height: ${ THEME_ICON_SIZE };
        margin-left: 20px;
        color: var(--icon);
        filter: brightness(1);
        
        &:hover {
            cursor: pointer;
            filter: ${ ({ theme }: Theme) => (!theme.isDark ? 'brightness(0.85)' : 'brightness(1.14)') }; 
        }
    }
`;
