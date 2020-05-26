import React             from 'react';
import { ThemeProvider } from 'styled-components/macro';

import { theme }         from '@core/config/theme';
import { Props }         from './types';

const Wrapper: React.FC<Props> = ({ children }) => (
    <ThemeProvider theme={ { ...theme, mode: 'dark' } }>
        { children }
    </ThemeProvider>
);

export default Wrapper;
