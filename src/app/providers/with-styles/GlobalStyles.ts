import { createGlobalStyle } from 'styled-components/macro';

import {
	darkValues,
	lightValues,
	commonValues
} from '@config/theme';

const GlobalStyles = createGlobalStyle`
    .light {
        ${ lightValues }
    }

    .dark {
        ${ darkValues }
    }

    :root {
        ${ commonValues }
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

    code {
        color: var(--primary);
        font-size: inherit;
        font-family: monospace;
    }

    p > code,
    li > code,
    dd > code,
    td > code,
    span > code {
        padding: .1rem .3rem .2rem;
        word-wrap: break-word;
        background: #ffeff0;
        border-radius: .2rem;
        box-decoration-break: clone;
    }
`;

export { GlobalStyles };
