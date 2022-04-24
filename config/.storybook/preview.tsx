import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator }      from '@storybook/react';
import { ThemeProvider }     from 'styled-components/macro';

import { theme }             from '@shared/config/theme';
import './shim';

addDecorator(storyFunction => (
	<ThemeProvider
		theme={ {
			...theme,
			mode: 'dark'
		} }
	>
		{ storyFunction() }
	</ThemeProvider>
));

const parameters = {
	layout  : 'centered',
	viewport: {
		viewports: INITIAL_VIEWPORTS
	}
};

export { parameters };
