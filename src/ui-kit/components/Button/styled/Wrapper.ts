import { FC }                                      from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components/macro';

import { Sizes, Styles }                           from '@ui-kit/enums/button';
import { SIZES, STYLES }                           from '@ui-kit/constants/button';

type FCPropsType = {
    size: Sizes;
    cStyle: Styles;
    onClick?: Function;
};

type StyledPropsType = FCPropsType & { theme: any };

export const Wrapper: FC<FCPropsType> = styled.button<StyledPropsType>`

    ${ ({ size, theme, cStyle }): FlattenSimpleInterpolation => css`
        height: ${ SIZES[size] };
        color: ${ theme[theme.mode][STYLES[cStyle]] };
        background-color: white;
        border-radius: 10px;
        border: 1px solid ${ theme[theme.mode][STYLES[cStyle]] };
        outline: none;
        cursor: pointer;

        &:hover {
            background-color: #efefef;
        }
    ` }

`;
