/* eslint-disable no-restricted-imports */
import React                from 'react';
import { Provider }         from 'react-redux';
import { ThemeProvider }    from 'styled-components';
import { render }           from 'enzyme';

import { theme }            from '@core/config/theme';
import { BrowserRouter }    from 'react-router-dom';
import { LanguageProvider } from '@core/components';
import { MountWrapper }     from '@test/types/wrapper';
import { store }            from '../__mocks__/store';

type Result<T> = {
    wrapper: MountWrapper,
    props: T
}

function setupMountWrapper<T extends Object>(Component: React.FC<any>, props: T = {} as T): Result<T> {
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

    // @ts-ignore
    return { wrapper, props };
}

export { setupMountWrapper };
