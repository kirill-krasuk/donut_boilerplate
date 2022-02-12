import { useState, useEffect }                from 'react';
import { useSelector }                        from 'react-redux';
import Cookie                                 from 'js-cookie';

import { Theme }                              from '@core/enums/theme';
import { useActions }                         from '@core/hooks/useActions';
import { getMode }                            from '@core/store/selectors/theme';
import { setDataThemeAttr, getDarkModeQuery } from '@utils/dom';

export function useTheme() {
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

    return theme;
}
