import { useState, useEffect }                from 'react';
import { useSelector, useDispatch }           from 'react-redux';
import Cookie                                 from 'js-cookie';

import { Theme, themeModel }                  from '@entities/theme';
import { setDataThemeAttr, getDarkModeQuery } from '@lib/dom';

export function useTheme() {
    const dispatch = useDispatch();

    const mode = useSelector(themeModel.selectors.getMode);

    const [ theme, setTheme ] = useState(mode);

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

            dispatch(themeModel.actions.changePreferColorScheme(currentTheme));
            setTheme(currentTheme);
        }
    }, [ dispatch, theme ]);

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
