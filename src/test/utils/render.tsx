/* eslint-disable no-restricted-imports */
import React                     from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider }              from 'react-redux';
import { ThemeProvider }         from 'styled-components';

import { theme }                 from '@app/theme';
import { BrowserRouter }         from 'react-router-dom';
import { LanguageProvider }      from '@core/components';
import { store }                 from '../__mocks__/store';

const AllTheProviders: React.ComponentType = ({ children }) => (
    <BrowserRouter>
        <Provider store={ store }>
            <LanguageProvider>
                <ThemeProvider theme={ { ...theme, mode: 'dark' } }>
                    { children }
                </ThemeProvider>
            </LanguageProvider>
        </Provider>
    </BrowserRouter>
);

function customRender(ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) {
    return render(ui, { wrapper: AllTheProviders, ...options });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
