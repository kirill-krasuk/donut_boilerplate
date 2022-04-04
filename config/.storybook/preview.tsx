import './shim';
import { addDecorator }      from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider }     from 'styled-components/macro';

import { theme }             from '@shared/config/theme';

addDecorator((storyFunction) => (
    <ThemeProvider theme={ { ...theme, mode: 'dark' } }>
        { storyFunction() }
    </ThemeProvider>
));

export const parameters = {
    layout  : 'centered',
    viewport: {
        viewports: INITIAL_VIEWPORTS
    }
};
