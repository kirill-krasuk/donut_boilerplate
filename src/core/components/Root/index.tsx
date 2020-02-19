import React, { useEffect }          from 'react';
import { useSelector, useDispatch }  from 'react-redux';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { ThemeProvider }             from 'styled-components';
import { push as pushAction }        from 'connected-react-router';
import R                             from 'ramda';

import theme                         from '@core/config/theme';
import { GlobalStyles }              from '@core/utils/styles';
import { getMode }                   from '@core/selectors/theme';
import { protectRedirect }           from '@app/routes/routes';
import LanguageProvider              from '../LanguageProvider';
import ModalManager                  from '../ModalManager';
import { PropsType }                 from './types';

const Root: React.FC<PropsType> = (props): JSX.Element => {
    const { route, location, staticContext } = props;

    const [ routes ]              = matchRoutes(route.routes, location.pathname);
    const { route: matchedRoute } = routes;

    const dispatch = useDispatch();
    const mode     = useSelector(getMode);

    const composeWithDispatch: Function = R.partial(R.compose, [ dispatch ]);

    const push: typeof pushAction = composeWithDispatch(pushAction);

    // server side redirect
    if (staticContext && matchedRoute.protect) {
        staticContext.status = 301;
        staticContext.url    = protectRedirect;
    }

    // server side 404
    if (staticContext && matchedRoute.path === '*') {
        staticContext.status = 404;
        staticContext.url    = '/404';
    }

    useEffect(() => {
        // isLogged logic here
        if (matchedRoute.protect) {
            push(protectRedirect);
        }
    }, [ matchedRoute ]);

    return (
        <ThemeProvider theme={ { ...theme, mode } }>
            <>
                <GlobalStyles />
                <LanguageProvider>
                    <>
                        { renderRoutes(route.routes) }
                        <ModalManager />
                    </>
                </LanguageProvider>
            </>
        </ThemeProvider>
    );
};

export default Root;
