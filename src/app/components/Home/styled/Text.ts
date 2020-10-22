import styled, { css } from 'styled-components/macro';

import { Theme }       from '@core/types/theme';

export const Text = styled.span`
    ${ ({ theme }: Theme) => css`
        font-weight: 500;
        color: ${ theme[theme.mode].typography.text };
        font-size: 1.42rem;
        margin-bottom: 10px;
    ` };
`;
