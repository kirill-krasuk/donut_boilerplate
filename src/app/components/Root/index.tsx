/* eslint-disable no-param-reassign */
import { useEffect, FC, useState }              from 'react';
import { useSelector, useDispatch }             from 'react-redux';
import { renderRoutes, matchRoutes }            from 'react-router-config';
import { ThemeProvider }                        from 'styled-components/macro';
import { push as pushAction }                   from 'connected-react-router';
import * as IO                                  from 'fp-ts/lib/IO';
import * as O                                   from 'fp-ts/lib/Option';
import { pipe }                                 from 'fp-ts/lib/pipeable';
import R                                        from 'ramda';
import Cookie                                   from 'js-cookie';

import { theme as themes }                      from '@core/config/theme';
import { getMode }                              from '@core/store/selectors/theme';
import { protectRedirect, routes as appRoutes } from '@app/routes/routes';
import { GlobalStyles }                         from '@app/components/GlobalStyles';
import LanguageProvider                         from '@core/components/LanguageProvider';
import ModalManager                             from '@core/components/ModalManager';
import { Context }                              from '@server/types/context';
import { getAuthToken }                         from '@utils/auth/getToken';
import { getInitialProps }                      from '@utils/props/getInitialProps';
import { Theme }                                from '@core/enums/theme';
import { useActions }                           from '@core/hooks/useActions';
import { getDarkModeQuery, setDataThemeAttr }   from '@utils/dom';
import * as S                                   from './styles';
import { Props }                                from './types';

const Root: FC<Props> = (props) => {
    const { route, location, staticContext } = props;

    const [ routes ]              = matchRoutes(route.routes!, location.pathname);
    const { route: matchedRoute } = routes;

    const dispatch = useDispatch();
    const mode     = useSelector(getMode);

    const [ theme, setTheme ] = useState(mode);

    const { changePreferColorScheme } = useActions();

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

    const handleChangeTheme = (event: MediaQueryListEvent) => {
        setTheme(event.matches ? Theme.Dark : Theme.Light);
    };

    useEffect(() => {
        // isLogged logic here
        if (matchedRoute.protect) {
            push(protectRedirect);
        }
    }, [ matchedRoute, push ]);

    useEffect(() => {
        setDataThemeAttr(theme);
    }, [ theme ]);

    // change theme by os theme
    // if the theme is not set force
    useEffect(() => {
        if (!Cookie.get('theme')) {
            const currentTheme = getDarkModeQuery()?.matches
                ? Theme.Dark
                : Theme.Light;

            changePreferColorScheme(currentTheme);
            setTheme(currentTheme);
        }
    }, [ changePreferColorScheme, theme ]);

    // prefer-color-scheme listener
    useEffect(() => {
        if (!Cookie.get('theme')) {
            const darkModeQuery = getDarkModeQuery();

            darkModeQuery?.addEventListener('change', handleChangeTheme);

            return () => {
                darkModeQuery?.removeEventListener('change', handleChangeTheme);
            };
        }
    });

    return (
        <ThemeProvider theme={ {
            ...themes,
            mode  : theme,
            isDark: theme === Theme.Dark
        } }
        >
            <S.Wrapper>
                <GlobalStyles />
                <LanguageProvider>
                    <>
                        { renderRoutes(route.routes, getInitialProps(staticContext)) }
                        <ModalManager />
                    </>
                </LanguageProvider>
            </S.Wrapper>
        </ThemeProvider>
    );
};

export default Root;
