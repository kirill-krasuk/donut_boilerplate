import { useEffect, useState }     from 'react';
import { ThemeProvider }           from 'styled-components';
import { themes }                  from '@storybook/theming';

import { theme }                   from '@shared/config/theme';
import { GlobalStyles }            from '@app/providers/with-styles/GlobalStyles';

import type { Decorator, Preview } from '@storybook/react';

const WithTheme: Decorator = (StoryFn, context) => {
	const [ currentMode, setCurrentMode ] = useState('light');
	const { globals, parameters }         = context;
	const newMode                         = parameters.theme || globals.theme || 'light';

	useEffect(() => {
		const body = document.querySelector('body');
		if (body) {
			body.className = 'light';
		}
	}, []);

	useEffect(() => {
		if (currentMode !== newMode) {
			setCurrentMode(newMode);
			const body = document.querySelector('body');
			if (body) {
				body.className = newMode;
			}
		}
	}, [ currentMode, newMode ]);

	return (
		<ThemeProvider theme={ { ...theme, mode: newMode } }>
			<GlobalStyles />

			<StoryFn />
		</ThemeProvider>
	);
};

const globalTypes = {
	theme: {
		name        : 'Theme',
		description : 'Global theme for components',
		defaultValue: 'light',
		toolbar     : {
			icon : 'circlehollow',
			items: [
				{ value: 'light', icon: 'circlehollow', title: 'light' },
				{ value: 'dark', icon: 'circle', title: 'dark' }
			],
			showName: true
		}
	}
};

const preview: Preview = {
	globalTypes,
	parameters: {
		docs: {
			theme: themes.dark
		},
		actions : { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date : /Date$/
			}
		}
	}
};

const decorators = [ WithTheme ];

export { decorators };
export default preview;
