import React             from 'react';
import { ThemeProvider } from 'styled-components';

import theme             from 'core/config/theme';

const Wrapper = ({ children }) => (
    <ThemeProvider theme={ { ...theme, mode: 'dark' } }>
        { children }
    </ThemeProvider>
);

export default Wrapper;
