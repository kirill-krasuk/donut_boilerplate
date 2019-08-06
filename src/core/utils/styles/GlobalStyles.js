import { createGlobalStyle } from 'styled-components';

import Adigiana              from 'fonts/Adigiana.ttf';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        transition: background-color .5s, color .5s ease;
    }

    html, body {
        overflow-x: hidden;
        background-color: ${ ({ theme }) => theme[theme.mode].background };
        min-height: 100vh;
    }

    #root {
        min-height: inherit;
    }

    @font-face {
        font-family: Adigiana;
        src: url(${ Adigiana });
    }
`;
