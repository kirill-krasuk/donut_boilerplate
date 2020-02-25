import { FC }                                      from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components/macro';

import { ThemedStyled }                            from '@core/types/theme';
import { ESizes, EStyles }                         from '@ui-kit/enums/button';

type FCProps = {
    size: ESizes;
    cStyle: EStyles;
    onClick?: Function;
};

export const Wrapper: FC<FCProps> = styled.button`
    ${ ({ size, theme, cStyle }: ThemedStyled<FCProps>): FlattenSimpleInterpolation => css`
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
