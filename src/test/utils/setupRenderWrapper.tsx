/* eslint-disable no-restricted-imports */
import React                from 'react';
import { Provider }         from 'react-redux';
import { ThemeProvider }    from 'styled-components';
import { BrowserRouter }    from 'react-router-dom';
import { render, waitFor }  from '@testing-library/react';

import { theme }            from '@entities/theme/model/theme';
import { LanguageProvider } from '@client/components';
import { store }            from '../__mocks__/store';

async function setupRenderWrapper<T extends Record<string, any>>(Component: React.FC<any>, props: T = {} as T) {
    const wrapper = render(
        <BrowserRouter>
            <Provider store={ store }>
                <LanguageProvider>
                    <ThemeProvider theme={ { ...theme, mode: 'dark' } }>
                        <Component { ...props } />
                    </ThemeProvider>
                </LanguageProvider>
            </Provider>
        </BrowserRouter>
    );

    await waitFor(() => null);

    return { wrapper, props };
}

export { setupRenderWrapper };
