import styled, { css }     from 'styled-components/macro';

import { Theme }           from '@core/types/theme';
import { ESizes, EStyles } from '@ui-kit/enums/button';

type Props = {
    size: ESizes;
    cStyle: EStyles;
    onClick?: Function;
};

export const Wrapper = styled.button<Props>`
    ${ ({ size, theme, cStyle }: Theme<Props>) => css`
        height: ${ size };
        color: ${ theme[theme.mode][cStyle] };
        background-color: white;
        border-radius: 10px;
        border: 1px solid ${ theme[theme.mode][cStyle] };
        outline: none;
        cursor: pointer;

        &:hover {
            background-color: #efefef;
        }
    ` }
`;
