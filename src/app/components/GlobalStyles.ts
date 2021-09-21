import { createGlobalStyle }                     from 'styled-components/macro';

import { darkValues, lightValues, commonValues } from '@app/theme';

export const GlobalStyles = createGlobalStyle`
    :root {
        ${ commonValues }
        ${ lightValues }

        &[data-theme="dark"] {
            ${ darkValues }
        }
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        transition: background-color .5s, color .5s ease;
    }

    html, body {
        min-height: 100vh;
        overflow-x: hidden;
        font-size: 14px;
        background-color: var(--background);
    }

    #root {
        min-height: inherit;
    }
`;
