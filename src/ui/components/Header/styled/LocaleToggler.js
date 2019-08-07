/* eslint-disable indent */
import styled, { css } from 'styled-components/macro';

export default styled.div`
    font-size: 28px;
    color: ${ ({ theme }) => theme[theme.mode]['ui_ch_theme-icon'] };
    filter: brightness(1);
    margin-right: 20px;
    text-transform: uppercase;

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
`;
