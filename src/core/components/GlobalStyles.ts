import { createGlobalStyle } from 'styled-components/macro';

import { Theme }             from '@core/types/theme';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        transition: background-color .5s, color .5s ease;
    }

    html, body {
        overflow-x: hidden;
        font-size: 14px;
        background-color: ${ ({ theme }: Theme) => theme.common.gray };
        min-height: 100vh;
    }

    #root {
        min-height: inherit;
    }
`;
