/* eslint-disable no-restricted-imports */
import React               from 'react';
import { Provider }        from 'react-redux';
import { ThemeProvider }   from 'styled-components';
import { BrowserRouter }   from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';

import { theme }           from '@config/theme';
import { LocalesProvider } from '@app/providers/with-locales';
import { store }           from '../__mocks__/store';

async function setupRenderWrapper<T extends Record<string, any>>(Component: React.FC<any>, props: T = {} as T) {
    const wrapper = render(
        <BrowserRouter>
            <Provider store={ store }>
                <LocalesProvider>
                    <ThemeProvider theme={ { ...theme, mode: 'dark' } }>
                        <Component { ...props } />
                    </ThemeProvider>
                </LocalesProvider>
            </Provider>
        </BrowserRouter>
    );

    await waitFor(() => null);

    return { wrapper, props };
}

export { setupRenderWrapper };
