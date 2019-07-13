// @flow
import React                        from 'react';
import type { ComponentType, Node } from 'react';
import { renderRoutes }             from 'react-router-config';
import { ThemeProvider }            from 'styled-components';

import theme                        from 'core/config/theme';
import { GlobalStyles }             from 'core/utils/styles';
import type { PropsType }           from './types';

const Root: ComponentType<PropsType> = (props): Node => {
    const { route } = props;

    return (
        <ThemeProvider theme={ { ...theme, mode: 'dark' } }>
            <>
                <GlobalStyles />
                { renderRoutes(route.routes) }
            </>
        </ThemeProvider>
    );
};

export default Root;
