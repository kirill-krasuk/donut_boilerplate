import styled    from 'styled-components/macro';

import { Theme } from '@app/types/theme';

export const LocaleToggler = styled.div`
    margin-right: 20px;
    color: var(--icon);
    font-size: 2rem;
    text-transform: uppercase;
    filter: brightness(1);

    &:hover {
        cursor: pointer;
        filter: ${ ({ theme }: Theme) => (!theme.isDark ? 'brightness(0.85)' : 'brightness(1.14)') }; 
    }
`;
