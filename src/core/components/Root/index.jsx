// @flow
import React                        from 'react';
import type { ComponentType, Node } from 'react';
import { useSelector }              from 'react-redux';
import { renderRoutes }             from 'react-router-config';
import { ThemeProvider }            from 'styled-components';

import theme                        from 'core/config/theme';
import { GlobalStyles }             from 'core/utils/styles';
import { getMode }                  from 'core/selectors/theme';
import type { PropsType }           from './types';

const Root: ComponentType<PropsType> = (props): Node => {
    const { route } = props;

    const mode = useSelector(getMode);

    return (
        <ThemeProvider theme={ { ...theme, mode } }>
            <>
                <GlobalStyles />
                { renderRoutes(route.routes) }
            </>
        </ThemeProvider>
    );
};

export default Root;
