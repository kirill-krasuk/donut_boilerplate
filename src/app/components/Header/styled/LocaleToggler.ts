import styled    from 'styled-components/macro';

import { Theme } from '@core/types/theme';

export const LocaleToggler = styled.div`
    font-size: 2rem;
    color: var(--icon);
    filter: brightness(1);
    margin-right: 20px;
    text-transform: uppercase;

    &:hover {
        cursor: pointer;
        filter: ${ ({ theme }: Theme) => (!theme.isDark ? 'brightness(0.85)' : 'brightness(1.14)') }; 
    }
`;
