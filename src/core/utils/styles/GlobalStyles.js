import { createGlobalStyle } from 'styled-components';

import Adigiana              from 'fonts/Adigiana.ttf';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }

    @font-face {
        font-family: Adigiana;
        src: url(${ Adigiana });
    }
`;
