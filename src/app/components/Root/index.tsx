/* eslint-disable no-param-reassign */
import React, { useEffect }                     from 'react';
import { hot }                                  from 'react-hot-loader/root';
import { useSelector, useDispatch }             from 'react-redux';
import { renderRoutes, matchRoutes }            from 'react-router-config';
import { Transition, TransitionGroup }          from 'react-transition-group';
import { ThemeProvider }                        from 'styled-components/macro';
import { push as pushAction }                   from 'connected-react-router';
import * as IO                                  from 'fp-ts/lib/IO';
import * as O                                   from 'fp-ts/lib/Option';
import { pipe }                                 from 'fp-ts/lib/pipeable';
import R                                        from 'ramda';

import { theme }                                from '@core/config/theme';
import { getMode }                              from '@core/selectors/theme';
import { protectRedirect, routes as appRoutes } from '@app/routes/routes';
import { GlobalStyles }                         from '@core/components/GlobalStyles';
import LanguageProvider                         from '@core/components/LanguageProvider';
import ModalManager                             from '@core/components/ModalManager';
import { Context }                              from '@server/types/context';
import { getAuthToken }                         from '@core/utils/auth/getToken';
import { getInitialProps }                      from '@core/utils/props/getInitialProps';
import * as S                                   from './styled';
import { Props }                                from './types';

const Root: React.FC<Props> = (props) => {
    const { route, location, staticContext } = props;

    const [ routes ]              = matchRoutes(route.routes!, location.pathname);
    const { route: matchedRoute } = routes;

    const dispatch = useDispatch();
    const mode     = useSelector(getMode);

    const composeWithDispatch: Function = R.partial(R.compose, [ dispatch ]);

    const push: typeof pushAction = composeWithDispatch(pushAction);

    const redirect = (serverContext: Context | undefined, status: number, to: string): IO.IO<void> => () => {
        serverContext!.status = status;
        serverContext!.to     = to;
    };

    pipe(
        O.fromNullable(staticContext),
        O.map(context => {
            // server side redirect with authentication
            pipe(
                getAuthToken(context)(),
                O.fold(
                    () => {
                        if (matchedRoute.noAuthRedirect) {
                            redirect(staticContext, 301, matchedRoute.noAuthRedirect)();
                        } else if (matchedRoute.protect) {
                            redirect(staticContext, 301, protectRedirect)();
                        }
                    },
                    () => (
                        matchedRoute.authRedirect
                            ? redirect(staticContext, 301, matchedRoute.authRedirect)()
                            : null
                    )
                )
            );

            // server side 404
            if (matchedRoute.path === '*') {
                redirect(context, 404, appRoutes[404].path)();
            }
        })
    );

    useEffect(() => {
        // isLogged logic here
        if (matchedRoute.protect) {
            push(protectRedirect);
        }
    }, [ matchedRoute ]);

    return (
        <ThemeProvider theme={ { ...theme, mode } }>
            <S.Wrapper>
                <GlobalStyles />
                <LanguageProvider>
                    <TransitionGroup className="transition-group">
                        <Transition
                            key={ location.key }
                            timeout={ 650 }
                            mountOnEnter
                            exit
                        >
                            { (state) => (
                                <S.AnimationContainer state={ state }>
                                    { renderRoutes(route.routes, getInitialProps(staticContext)) }
                                </S.AnimationContainer>
                            ) }
                        </Transition>
                        <ModalManager />
                    </TransitionGroup>
                </LanguageProvider>
            </S.Wrapper>
        </ThemeProvider>
    );
};

export default hot(Root);
