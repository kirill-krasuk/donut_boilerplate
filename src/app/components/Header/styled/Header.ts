import styled, { css } from 'styled-components/macro';

import { Theme }       from '@core/types/theme';

export const Header = styled.header`
    ${ ({ theme }: Theme) => css`
        width: 100%;
        background: ${ theme[theme.mode].header_bg };
        position: relative;
        display: flex;
        justify-content: center;

        &:before {
            background: ${ theme[theme.mode].secondary };
            content: '';
            height: 2px;
            width: 60%;
            position: absolute;
            bottom: 0;
            z-index: 10;
        }
    ` };
`;
