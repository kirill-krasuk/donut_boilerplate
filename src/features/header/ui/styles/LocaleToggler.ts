import styled            from 'styled-components/macro';

import type { AppTheme } from '@entities/theme';

export const LocaleToggler = styled.div`
    margin-right: 20px;
    color: var(--icon);
    font-size: 2rem;
    text-transform: uppercase;
    filter: brightness(1);

    &:hover {
        cursor: pointer;
        filter: ${ ({ theme }: AppTheme) => (!theme.isDark ? 'brightness(0.85)' : 'brightness(1.14)') }; 
    }
`;
