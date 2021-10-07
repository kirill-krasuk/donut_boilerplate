import './shim';
import React              from 'react';
import { addDecorator }   from '@storybook/react';
import { ThemeProvider }  from 'styled-components/macro';

import { theme }          from '@core/config/theme';

addDecorator((storyFn) => (
    <ThemeProvider theme={ { ...theme, mode: 'dark' } }>
        { storyFn() }
    </ThemeProvider>
));

export const parameters = {
    layout: 'centered',
};
