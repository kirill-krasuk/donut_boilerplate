import styled, { css } from 'styled-components/macro';

import { Theme }       from '@core/types/theme';

export const Head = styled.div`
    ${ ({ theme }: Theme) => css`
        color: white;
        font-size: 1.42rem;
        text-transform: uppercase;
        width: calc(100% - 5px * 2);
        background-color: ${ theme[theme.mode].secondary };
        padding: 4px 5px;
    ` }
`;
