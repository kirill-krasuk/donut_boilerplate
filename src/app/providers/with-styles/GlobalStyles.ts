import { createGlobalStyle } from 'styled-components';

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
		font-family: Montserrat, sans-serif;
		transition: background-color .5s, color .5s ease;
	}

	html,
	body {
		overflow-x: hidden;
		min-height: 100vh;
		font-size: 14px;
		background-color: var(--background);
	}

	#root {
		min-height: inherit;
	}

	code {
		font-family: monospace;
		font-size: inherit;
		color: var(--primary);
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
