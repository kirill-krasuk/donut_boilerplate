import React             from 'react';
import { ThemeProvider } from 'styled-components';

import theme             from '@core/config/theme';
import { PropsType }     from './types';

const Wrapper: React.FC<PropsType> = ({ children }): JSX.Element => (
    <ThemeProvider theme={ { ...theme, mode: 'dark' } }>
        { children }
    </ThemeProvider>
);

export default Wrapper;
