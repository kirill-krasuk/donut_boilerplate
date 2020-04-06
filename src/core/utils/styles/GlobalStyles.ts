import { createGlobalStyle } from 'styled-components';

import { ThemedStyled }      from '@core/types/theme';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        transition: background-color .5s, color .5s ease;
    }

    html, body {
        overflow-x: hidden;
        background-color: ${ ({ theme }: ThemedStyled): string => theme[theme.mode].background };
        min-height: 100vh;
    }

    #root {
        min-height: inherit;
    }
`;
