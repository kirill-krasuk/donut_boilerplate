import React              from 'react';
import { addDecorator }   from '@storybook/react';
import { ThemeProvider }  from 'styled-components/macro';
import { withA11y }       from '@storybook/addon-a11y';

import { theme }          from '@core/config/theme';

addDecorator(withA11y);
// addDecorator(withPropsTable);

addDecorator((storyFn) => (
    <ThemeProvider theme={ { ...theme, mode: 'dark' } }>
        { storyFn() }
    </ThemeProvider>
));

