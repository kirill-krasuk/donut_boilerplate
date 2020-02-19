/* eslint-disable indent */

import styled, { css }      from 'styled-components/macro';

import { THEME_ICON_SIZE }  from '@ui-kit/constants/header';

export default styled.div`
    & svg {
        height: ${ THEME_ICON_SIZE };
        width: ${ THEME_ICON_SIZE };
        color: ${ ({ theme }) => theme[theme.mode]['ui_ch_theme-icon'] };
        filter: brightness(1);
        margin-left: 20px;

        &:hover {
            cursor: pointer;
            ${ ({ theme }) => (theme.mode === 'light'
                ? css`
                    filter: brightness(0.85)
                `
                : css`
                    filter: brightness(1.14)
                `)
            };
        }
    }
`;
