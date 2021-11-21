/* eslint-disable no-param-reassign */
import { useEffect, FC, useState }            from 'react';
import { useSelector }                        from 'react-redux';
import { Outlet }                             from 'react-router-dom';
import { ThemeProvider }                      from 'styled-components/macro';
import Cookie                                 from 'js-cookie';

import { theme as themes }                    from '@core/config/theme';
import { getMode }                            from '@core/store/selectors/theme';
import { GlobalStyles }                       from '@app/components/GlobalStyles';
import LanguageProvider                       from '@core/components/LanguageProvider';

// import ModalManager                           from '@core/components/ModalManager';
import { Theme }                              from '@core/enums/theme';
import { useActions }                         from '@core/hooks/useActions';
import { getDarkModeQuery, setDataThemeAttr } from '@utils/dom';
import * as S                                 from './styles';

const Root: FC = () => {
    const mode = useSelector(getMode);

    const [ theme, setTheme ] = useState(mode);

    const { changePreferColorScheme } = useActions();

    const handleChangeTheme = (event: MediaQueryListEvent) => {
        setTheme(event.matches ? Theme.Dark : Theme.Light);
    };

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
                        <Outlet />
                        { /* <ModalManager /> */ }
                    </>
                </LanguageProvider>
            </S.Wrapper>
        </ThemeProvider>
    );
};

export default Root;
